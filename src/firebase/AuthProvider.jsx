import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "./firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children })=>{

const auth = getAuth(app)

const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('currentUser', currentUser);
            setLoading(false)

        });
        return () =>{
            return unsubscribe();
        }
    },[])


    
const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(false);
        return signOut(auth);
      };
      const provider = new GoogleAuthProvider()

      const googleSign = () => {
        return signInWithPopup(auth, provider);
      };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        googleSign

    }


return (
    <div className="">
        <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
    </div>
)
}

export default AuthProvider