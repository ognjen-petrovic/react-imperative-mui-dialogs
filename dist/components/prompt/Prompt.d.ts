import { Dispatch, SetStateAction } from "react";
export type PromptReturnType = string | null;
export declare const promptDefaults: {
    defaultAnswer: string;
};
type PromptProps = {
    isOpen: boolean;
    handleClose: Dispatch<SetStateAction<string | null>> | ((answer: PromptReturnType) => void);
    question: string;
    defaultAnswer?: string;
};
export declare function Prompt({ isOpen, handleClose, question, defaultAnswer }: PromptProps): JSX.Element;
export {};
