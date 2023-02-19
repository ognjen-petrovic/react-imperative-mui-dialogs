import { Dispatch, SetStateAction } from "react";
interface ConfirmProps {
    isOpen: boolean;
    handleClose: Dispatch<SetStateAction<boolean>> | ((answer: boolean) => void);
    question: string;
}
export declare function Confirm({ isOpen, handleClose, question }: ConfirmProps): JSX.Element;
export {};
