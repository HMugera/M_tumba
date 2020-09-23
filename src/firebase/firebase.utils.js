import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVgOr_FehIaJ2QQgLJm-k1fKxvV_UDAm8",
  authDomain: "m-tumba.firebaseapp.com",
  databaseURL: "https://m-tumba.firebaseio.com",
  projectId: "m-tumba",
  storageBucket: "m-tumba.appspot.com",
  messagingSenderId: "486243297879",
  appId: "1:486243297879:web:9eb0232ea88f418c77d112",
  measurementId: "G-JLL5WKXB0C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists){ 
    const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  } catch (error) {
    console.log("error creating user", error.message);
  }}

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
