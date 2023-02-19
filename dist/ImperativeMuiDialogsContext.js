import React, { createContext, useContext, useState } from "react";
import { Alert } from "./components/alert/Alert";
import { Prompt, promptDefaults } from './components/prompt/Prompt';
import { Confirm } from './components/confirm/Confirm';
const ImperativeMuiDialogsContext = createContext({
    alert: {
        open: (_m) => new Promise(() => { })
    },
    confirm: {
        open: (_q) => new Promise(() => { })
    },
    prompt: {
        open: (_q) => new Promise(() => { })
    }
});
ImperativeMuiDialogsContext.displayName = 'ImperativeMuiDialogsContext';
export function ImperativeMuiDialogsContextProvider({ children }) {
    const [promptState, setPromptState] = useState({
        isOpen: false,
        question: '',
        defaultAnswer: promptDefaults.defaultAnswer,
        promise: { resolve: (_value) => { } }
    });
    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        question: '',
        promise: { resolve: (_value) => { } }
    });
    const [alertState, setAlertState] = useState({
        isOpen: false,
        message: '',
        promise: { resolve: (_value) => { } }
    });
    function openAlert(message) {
        return new Promise((resolve) => {
            setAlertState({ promise: { resolve }, message, isOpen: true });
        });
    }
    function openConfirm(question) {
        return new Promise((resolve) => {
            setConfirmState({ promise: { resolve }, question, isOpen: true });
        });
    }
    function openPrompt(question, defaultAnswer = promptDefaults.defaultAnswer) {
        return new Promise((resolve) => {
            setPromptState({ promise: { resolve }, question, defaultAnswer, isOpen: true });
        });
    }
    function handleCloseAlert() {
        setAlertState(Object.assign(Object.assign({}, alertState), { isOpen: false }));
        alertState.promise.resolve(undefined);
    }
    function handleCloseConfirm(answer) {
        setConfirmState(Object.assign(Object.assign({}, confirmState), { isOpen: false }));
        confirmState.promise.resolve(answer);
    }
    function handleClosePrompt(answer) {
        setPromptState(Object.assign(Object.assign({}, promptState), { isOpen: false }));
        promptState.promise.resolve(answer);
    }
    return (React.createElement(ImperativeMuiDialogsContext.Provider, { value: {
            alert: { open: openAlert },
            confirm: { open: openConfirm },
            prompt: { open: openPrompt },
        } },
        children,
        React.createElement(Alert, { isOpen: alertState.isOpen, handleClose: handleCloseAlert, message: alertState.message }),
        React.createElement(Confirm, { isOpen: confirmState.isOpen, handleClose: handleCloseConfirm, question: confirmState.question }),
        React.createElement(Prompt, { isOpen: promptState.isOpen, handleClose: handleClosePrompt, question: promptState.question, defaultAnswer: promptState.defaultAnswer })));
}
export function useAlert() {
    return useContext(ImperativeMuiDialogsContext).alert.open;
}
export function useConfirm() {
    return useContext(ImperativeMuiDialogsContext).confirm.open;
}
export function usePrompt() {
    return useContext(ImperativeMuiDialogsContext).prompt.open;
}
