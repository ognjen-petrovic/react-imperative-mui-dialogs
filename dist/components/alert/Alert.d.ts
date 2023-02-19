import { Dispatch, SetStateAction } from "react";
interface AlertProps {
    isOpen: boolean;
    handleClose: Dispatch<SetStateAction<boolean>> | (() => void);
    message: string;
}
export declare function Alert({ isOpen, handleClose, message }: AlertProps): JSX.Element;
export {};
