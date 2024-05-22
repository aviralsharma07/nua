// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createContext } from "react";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDLZp9872UbYI_oFxoOoiA0vCyd19oFqus",
//   authDomain: "nua-avi.firebaseapp.com",
//   projectId: "nua-avi",
//   storageBucket: "nua-avi.appspot.com",
//   messagingSenderId: "456084952732",
//   appId: "1:456084952732:web:98a2f10b9d59ad090d7f59",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);

// export const FirebaseContext = createContext(null);

// export const FirebaseProvider = (props) => {
//   const signUp = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
//       const user = userCredential.user;
//       console.log(user.email);
//       return user;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const signIn = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
//       const user = userCredential.user;
//       user && console.log("Sign In Successfull", user.email);
//       return user;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logOut = async () => {
//     try {
//       await signOut(firebaseAuth);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const contextValue = {
//     signUp,
//     signIn,
//     firebaseAuth,
//     logOut,
//   };
//   return <FirebaseContext.Provider value={contextValue}>{props.children}</FirebaseContext.Provider>;
// };

import { initializeApp } from "firebase/app";
import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLZp9872UbYI_oFxoOoiA0vCyd19oFqus",
  authDomain: "nua-avi.firebaseapp.com",
  projectId: "nua-avi",
  storageBucket: "nua-avi.appspot.com",
  messagingSenderId: "456084952732",
  appId: "1:456084952732:web:98a2f10b9d59ad090d7f59",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      console.log(user.email);
      setUser(user);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      user && console.log("Sign In Successful", user.email);
      setUser(user);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(firebaseAuth);
      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextValue = {
    signUp,
    signIn,
    logOut,
    user,
  };

  return <FirebaseContext.Provider value={contextValue}>{props.children}</FirebaseContext.Provider>;
};
