import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
     const [loading, setLoading]= useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const logout =()=>{
      return  signOut(auth)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const GoogleSignIn=()=>{
      return  signInWithPopup(auth, provider);
     }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    }, [])
    const userInfo ={
           createUser, 
           user,
           setUser,
           updateUser,
           logout,
           signIn,
           GoogleSignIn,
           loading,
           setLoading
        }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;