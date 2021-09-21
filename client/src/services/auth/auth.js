import firebase from "firebase/compat/app";
import "firebase/compat/auth";

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

export const auth = firebase.auth();

export function onAuthStateChanged(...props) {
  return auth.onAuthStateChanged(...props);
}

export function signInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}
