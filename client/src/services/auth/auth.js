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

export function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged(callback);
}

export function signInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(GoogleAuthProvider);
}

export function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signUpWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return firebase.auth().sendPasswordResetEmail(email);
}

export function signOut() {
  return firebase.auth().signOut();
}

export function getCurrentUserToken() {
  if (!firebase.auth().currentUser) {
    return null;
  }

  return firebase.auth().currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!firebase.auth().currentUser) {
    return null;
  }

  return firebase.auth().currentUser.email;
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function updateUserEmail(email) {
  return firebase.auth().currentUser.updateEmail(email);
}

export async function reauthenticate(currentPassword) {
  const user = firebase.auth().currentUser;
  const cred = firebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  );
  return user.reauthenticateWithCredential(cred);
}

export function updateUserPassword(newPassword) {
  return firebase.auth().currentUser.updatePassword(newPassword);
}
