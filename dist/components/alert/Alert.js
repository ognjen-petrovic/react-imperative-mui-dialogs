import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { makeDialogTitle } from "../../utils";
export function Alert({ isOpen, handleClose, message }) {
    return (React.createElement(Dialog, { open: isOpen, onClose: handleClose },
        React.createElement(DialogTitle, null, makeDialogTitle()),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, null, message)),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: () => handleClose(false) }, "OK"))));
}
