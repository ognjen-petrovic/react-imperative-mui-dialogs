import React, { useRef } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { makeDialogTitle } from "../../utils";
export function Confirm({ isOpen, handleClose, question }) {
    const cancelRef = useRef(null);
    function onEntered() {
        if (cancelRef.current) {
            cancelRef.current.focus();
        }
    }
    return (React.createElement(Dialog, { open: isOpen, onClose: () => handleClose(false), TransitionProps: { onEntered: onEntered } },
        React.createElement(DialogTitle, null, makeDialogTitle()),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, null, question)),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: () => handleClose(false), ref: cancelRef, href: "" }, "Cancel"),
            React.createElement(Button, { onClick: () => handleClose(true) }, "OK"))));
}
