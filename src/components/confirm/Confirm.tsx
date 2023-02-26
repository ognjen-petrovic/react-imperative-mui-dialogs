import React, { Dispatch, SetStateAction, useRef } from "react";
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material'
import { makeDialogTitle } from "../../utils";

export const confirmDefaults = {
    cancelBtnText: 'Cancel',
    okBtnText: 'OK'
}

interface ConfirmProps {
    isOpen: boolean,
    handleClose: Dispatch<SetStateAction<boolean>> | ((answer: boolean) => void)
    question: string,
    cancelBtnText?: string,
    okBtnText?: string
}

export function Confirm({
    isOpen,
    handleClose,
    question,
    cancelBtnText = confirmDefaults.cancelBtnText,
    okBtnText = confirmDefaults.okBtnText 
}: ConfirmProps) {
    const cancelRef = useRef<HTMLAnchorElement>(null)
    function onEntered() {
        if (cancelRef.current) {
            cancelRef.current.focus()
        }
    }
    return (
        <Dialog
            open={isOpen}
            onClose={() => handleClose(false)}
            TransitionProps={{ onEntered: onEntered }}
        >
            <DialogTitle>
                {makeDialogTitle()}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {question}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(false)} ref={cancelRef} href="">
                    {cancelBtnText}
                </Button>
                <Button onClick={() => handleClose(true)}>
                    {okBtnText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}