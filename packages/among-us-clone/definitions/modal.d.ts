import { ReactNode } from "react";

interface IModalProps {
    title?: string;
    children: ReactNode;
    opened: boolean;
    onClose: () => void;
    onSubmit: () => void;
}