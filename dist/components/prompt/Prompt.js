import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { makeDialogTitle } from './../../utils';
export const promptDefaults = {
    defaultAnswer: ''
};
export function Prompt({ isOpen, handleClose, question, defaultAnswer = promptDefaults.defaultAnswer }) {
    const [answer, setAnswer] = useState(defaultAnswer);
    return (React.createElement(Dialog, { open: isOpen, onClose: () => handleClose(null), TransitionProps: { onEntering: () => setAnswer(defaultAnswer) } },
        React.createElement(DialogTitle, null, makeDialogTitle()),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, null, question),
            React.createElement(TextField, { value: answer, onChange: e => setAnswer(e.target.value), onKeyDown: e => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleClose(answer);
                    }
                }, autoFocus: true, fullWidth: true })),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: () => handleClose(null) }, "Cancel"),
            React.createElement(Button, { onClick: () => handleClose(answer) }, "OK"))));
}
