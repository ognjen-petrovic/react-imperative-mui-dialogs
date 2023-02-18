import React, { Dispatch, SetStateAction, useRef } from "react";
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material'
import { makeDialogTitle } from "../../utils";

interface ConfirmProps {
    isOpen: boolean,
    handleClose: Dispatch<SetStateAction<boolean>> | ((answer: boolean) => void)
    question: string
}

export function Confirm({ isOpen, handleClose, question }: ConfirmProps) {
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
                    Cancel
                </Button>
                <Button onClick={() => handleClose(true)}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}