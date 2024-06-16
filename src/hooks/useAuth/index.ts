import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useUser must be used within an UserProvider');
    }

    return context;
}