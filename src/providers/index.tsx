'use client'

import React from "react";
import AuthProvider from "./AuthProvider";

type ChildrenType={
children:React.ReactNode
}
const Providers = ({children}:ChildrenType) => {
    return (
        <AuthProvider>
           {children} 
        </AuthProvider>
    );
};

export default Providers;