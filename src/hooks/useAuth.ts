'use client'
import AuthContext from '@/contexts/AuthContext';
import React, { useContext } from 'react';

const useAuth = () => {
    const auth=useContext(AuthContext)
    const isClient= typeof window!=='undefined'
    if(!isClient && !auth)return {}
    if(!auth){
        throw new Error('Please provide an auth')
    }
    return auth
};

export default useAuth;