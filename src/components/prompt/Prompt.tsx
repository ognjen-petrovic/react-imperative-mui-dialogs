import React, { Dispatch, SetStateAction, useState } from "react";
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material'
import { makeDialogTitle } from './../../utils'

export type PromptReturnType = string | null

export const promptDefaults = {
    defaultAnswer: ''
}

type PromptProps = {
    isOpen: boolean,
    handleClose: Dispatch<SetStateAction<string | null>> | ((answer: PromptReturnType) => void)
    question: string,
    defaultAnswer?: string
}

export function Prompt({ 
        isOpen, 
        handleClose, 
        question, 
        defaultAnswer = promptDefaults.defaultAnswer
    } : PromptProps) {
    const [answer, setAnswer] = useState(defaultAnswer)

    return (
        <Dialog
            open={isOpen}
            onClose={() => handleClose(null)}
            TransitionProps={{ onEntering: () => setAnswer(defaultAnswer) }}
        >
            <DialogTitle>
                {makeDialogTitle()}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {question}
                </DialogContentText>

                <TextField
                    value={answer}
                    onChange={ e => setAnswer(e.target.value)}
                    onKeyDown={ e => {
                        if(e.key === 'Enter') {
                            e.preventDefault()
                            handleClose(answer)
                        }
                    }}
                    autoFocus
                    fullWidth
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(null)}>
                    Cancel
                </Button>
                <Button onClick={() => handleClose(answer)}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}