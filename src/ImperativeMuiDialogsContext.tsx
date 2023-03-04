import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { Alert } from "./components/alert/Alert";
import {Prompt, promptDefaults, PromptReturnType} from './components/prompt/Prompt'
import {Confirm} from './components/confirm/Confirm'

type AlertContextType = {
    open: (message: string) => Promise<undefined>
}

type ConfirmContextType = {
    open: (question: string) => Promise<boolean>
}

type PromptContextType = {
    open: (question: string, defaultAnswer?: string) => Promise<PromptReturnType>
}

type ImperativeMuiDialogsContextType = {
    alert: AlertContextType,
    confirm: ConfirmContextType,
    prompt: PromptContextType,
}

const ImperativeMuiDialogsContext = createContext<ImperativeMuiDialogsContextType>({
    alert: {
        open: (_m: string) => new Promise(() => {})
    },
    confirm: {
        open: (_q: string) => new Promise(()=>{})
    },
    prompt: {
        open: (_q: string) => new Promise(()=>{})
    }
})
ImperativeMuiDialogsContext.displayName = 'ImperativeMuiDialogsContext'

export type ImperativeMuiDialogsContextProps = {
    alert?: {
        btnText: string
    }
    confirm?: {
        cancelBtnText?: string,
        okBtnText?: string
    },
    prompt?: {
        cancelBtnText?: string,
        okBtnText?: string
    }
}

export function ImperativeMuiDialogsContextProvider({
    children,
    alert,
    confirm,
    prompt
}: PropsWithChildren<ImperativeMuiDialogsContextProps>) {
    const [promptState, setPromptState] = useState({
        isOpen: false,
        question: '',
        defaultAnswer: promptDefaults.defaultAnswer,
        promise: { resolve: (_value: PromptReturnType) => {} }
    })

    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        question: '',
        promise: { resolve: (_value: boolean) => {} }
    })

    const [alertState, setAlertState] = useState({
        isOpen: false,
        message: '',
        promise: { resolve: (_value: undefined) => {} }
    })

    function openAlert(message: string) {
        return new Promise<undefined>((resolve) => {
            setAlertState({promise: {resolve}, message, isOpen: true})
        })
    }

    function openConfirm (question: string) {
        return new Promise<boolean>((resolve) => {
            setConfirmState({promise: {resolve}, question, isOpen: true})
        })
    }

    function openPrompt  (question: string, defaultAnswer: string = promptDefaults.defaultAnswer) {
        return new Promise<PromptReturnType>((resolve) => {
            setPromptState({promise: {resolve}, question, defaultAnswer, isOpen: true})
        })
    }

    const contextValue = useMemo(() => {
        return {
            alert: {open: openAlert},
            confirm:{open: openConfirm},
            prompt: {open: openPrompt}                  
        } as ImperativeMuiDialogsContextType
    }, [])

    function handleCloseAlert() {
        setAlertState({...alertState, isOpen: false})
        alertState.promise.resolve(undefined)
    }

    function handleCloseConfirm(answer: boolean) {
        setConfirmState({...confirmState, isOpen: false})
        confirmState.promise.resolve(answer)
    }

    function handleClosePrompt(answer: PromptReturnType) {
        setPromptState({...promptState, isOpen: false})
        promptState.promise.resolve(answer)
    }

    return (
        <ImperativeMuiDialogsContext.Provider 
            value={contextValue}>
            {children}
            <Alert
                isOpen={alertState.isOpen}
                handleClose={ handleCloseAlert }
                message={alertState.message}
                btnText={alert?.btnText}
            ></Alert>
            <Confirm
                isOpen={confirmState.isOpen}
                handleClose={handleCloseConfirm}
                question={confirmState.question}
                cancelBtnText={confirm?.cancelBtnText}
                okBtnText={confirm?.okBtnText}
            ></Confirm>
            <Prompt
                isOpen={promptState.isOpen}
                handleClose={handleClosePrompt}
                question={promptState.question}
                defaultAnswer={promptState.defaultAnswer}
                cancelBtnText={prompt?.cancelBtnText}
                okBtnText={prompt?.okBtnText}
            ></Prompt>
        </ImperativeMuiDialogsContext.Provider>
    )
}

export function useAlert() {
    return useContext(ImperativeMuiDialogsContext).alert.open
}

export function useConfirm() {
    return useContext(ImperativeMuiDialogsContext).confirm.open
}

export function usePrompt() {
    return useContext(ImperativeMuiDialogsContext).prompt.open
}