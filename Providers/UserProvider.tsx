"use client";

import { MyUserContextProvider } from '@/hooks/useUser';
import React from 'react'


interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children}) => {

    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )

}

export default UserProvider;