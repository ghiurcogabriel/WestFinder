import { useState, useEffect } from "react";
import { authUser } from "../Firebase/Config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSingUp = () => {
  //cleanup states
  const [isCancelled, setIsCancelled] = useState(false);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(
        authUser,
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup..");
      }

      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { error, isPending, signup };
};
