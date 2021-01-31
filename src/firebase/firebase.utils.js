import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyCXKmXJPl99Hzlu1fn7dZyVWdt_3bm9px8",
  authDomain: "crwn2-db-12e83.firebaseapp.com",
  projectId: "crwn2-db-12e83",
  storageBucket: "crwn2-db-12e83.appspot.com",
  messagingSenderId: "420827729905",
  appId: "1:420827729905:web:6aabe6abb232c499e7be50",
  measurementId: "G-F3HYK1Q9F3"
};
export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth)
  return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapshot=await userRef.get();
  if(!snapshot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log("error created in creating user",error.message)
  }
  

  }
  return userRef;
}


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;