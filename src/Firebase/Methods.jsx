import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { appProject, db } from "./Config";

const auth = getAuth(appProject);

const googleProvider = new GoogleAuthProvider();

export const getProductByID= async (id) =>{
  const response = await db.ref().child('mens').child(id).get();
  const product = response.val()

  console.log(product);
  return product;
}

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithUsernameAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password
    });
  } catch (error) {
    console.log(error);
  }
};

const sentPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset sent");
  } catch (error) {
    console.log(error);
  }
};

const logOut = async () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithUsernameAndPassword,
  registerWithEmailAndPassword,
  sentPasswordReset,
  logOut,
};
