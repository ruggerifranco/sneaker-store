'use client';
import { auth, provider } from '@/firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    const registerUser = async (values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
        } catch (error) {
            throw error;
        }
    };

    const loginUser = async (values) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
        } catch (error) {
            throw error;;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    };

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                });
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                });
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
