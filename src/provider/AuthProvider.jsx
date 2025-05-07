import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    console.log(user)
    // register account using email and password
    const handleEmailPasswordRegister = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login using email password
    const handleLoginEmail = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out 
    const handleLogOut = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        user, 
        setUser,
        handleEmailPasswordRegister,
        handleLoginEmail,
        handleLogOut,
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            currentUser && setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;