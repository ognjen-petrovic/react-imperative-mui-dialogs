import React, { Dispatch, SetStateAction } from "react";
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material'
import { makeDialogTitle } from "../../utils";

interface AlertProps {
    isOpen: boolean,
    handleClose: Dispatch<SetStateAction<boolean>> | (() => void)
    message: string,
    btnText?: string
}

export function Alert({ isOpen, handleClose, message, btnText = 'OK' }: AlertProps) {
    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
        >
            <DialogTitle>
                {makeDialogTitle()}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(false)}>
                    {btnText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}