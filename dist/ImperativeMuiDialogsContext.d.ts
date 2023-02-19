import { ReactNode } from "react";
import { PromptReturnType } from './components/prompt/Prompt';
type ImperativeMuiDialogsContextProps = {
    children: ReactNode;
};
export declare function ImperativeMuiDialogsContextProvider({ children }: ImperativeMuiDialogsContextProps): JSX.Element;
export declare function useAlert(): (message: string) => Promise<undefined>;
export declare function useConfirm(): (question: string) => Promise<boolean>;
export declare function usePrompt(): (question: string, defaultAnswer?: string | undefined) => Promise<PromptReturnType>;
export {};
