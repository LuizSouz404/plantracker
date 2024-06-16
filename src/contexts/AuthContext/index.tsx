import React, { createContext, useEffect, useState } from 'react';
import { AuthContextData, AuthProviderProps, Data } from './type';
import { User } from '@/libs/storage/userStorage/types';
import { getUserStorage, saveUserStorage } from '@/libs/storage/userStorage/user';

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [isLoading, setIsloading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    
    async function handleAuth(user: Data) {
        await saveUserStorage(user);
        
        setUser(user);
    }
    
    useEffect(() => {
        (async function () {
            const data = await getUserStorage();
            
            setUser(data);
            setIsloading(false);
        })()
    }, [])
    
    return (
        <AuthContext.Provider
        value={{
            user,
            isAuth: !!user?.name,
            isLoading,
            handleAuth
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}