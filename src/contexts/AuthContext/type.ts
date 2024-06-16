import { User } from "@/libs/storage/userStorage/types";
import { ReactNode } from "react";

export interface Data {
    name: string;
}

export interface AuthContextData {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
    handleAuth: (data: Data) => Promise<void>;
}

export interface AuthProviderProps {
    children: ReactNode;
}