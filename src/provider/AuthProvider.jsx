import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //console.log(user, loading)
    // register account using email and password
    const handleEmailPasswordRegister = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login using email password
    const handleLoginEmail = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out 
    const handleLogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user, 
        setUser,
        handleEmailPasswordRegister,
        handleLoginEmail,
        handleLogOut,
        loading, 
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
        
    },[])

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;