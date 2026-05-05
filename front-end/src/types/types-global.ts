import type { ReactNode } from "react";

export interface ProjectModalProps {
    item: any;
    onClose?: () => void;
    className: string
}

export interface PropsUserRegister {
    email: string;
    password: string;
}

export interface PropsUserLogin {
    email: string;
    password: string;
}
export interface PropsCard {
    className: string;
    children: ReactNode
}

export interface PropsCardBody {
    children: ReactNode
}

export interface PropsFileUpload{
    userId: number,
    file: FormData
}


