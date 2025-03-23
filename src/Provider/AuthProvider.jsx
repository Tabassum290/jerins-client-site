import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GoogleAuthProvider} from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

const createNewUser = (email,password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);
}

const LoginUser =(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

const loginWithGoogle = () =>{
return signInWithPopup(auth,provider);
}

useEffect (()=>{
const unSubscribe =  onAuthStateChanged(auth,(currentUser )=> {
    setUser(currentUser);
    setLoading(false);
  })
  return ()=>{
    unSubscribe();
  }
}),[]

const updateUserProfile = (updatedData)=>{
return updateProfile(auth.currentUser , updatedData);
}

const logOut = ()=>{
  setLoading(true);
  return signOut(auth);
}

    const authInfo = {
        user,
        setUser,
        createNewUser,
        LoginUser,
        logOut,
        loading,
        updateUserProfile,
        loginWithGoogle,
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;