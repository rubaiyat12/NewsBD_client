import React, { createContext } from 'react';
// import { getAuth } from "firebase/auth";
export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const user = { displayName: 'Batas Ali' }
    
    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;