// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toastSuccessNotify, toastErrorNotify, toastWarnNotify } from "../helper/Toastfy.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyAzwJMxOCdYBeYTD-byDeq2Mb1u4U8TZFE",
  authDomain: "movie-app-7234.firebaseapp.com",
  projectId: "movie-app-7234",
  storageBucket: "movie-app-7234.appspot.com",
  messagingSenderId: "773066698844",
  appId: "1:773066698844:web:d39d0e5aafaad685a0f699",
  measurementId: "G-8X3RPKB4D1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: displayName });
    console.log(userCredential);
    toastSuccessNotify("Registered is successfully!")
    navigate("/login");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
  
  toastWarnNotify("logged out successfully");
};

export const signIn = async (email, password, navigate) => {
  try {
     await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
     toastSuccessNotify("Login successfully!")
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const signUpProvider = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Login successfully!!");
    })
    .catch((error) => {
      // Handle Errors here.
      toastErrorNotify(error);
    });
};
