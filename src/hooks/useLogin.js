import { useState } from "react";
import { authUser } from "../Firebase/Config";
import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  //cleanup states
  const [isCancelled, setIsCancelled] = useState(false);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    try {
      const result = await signInWithEmailAndPassword(
        authUser,
        email,
        password
      );

      dispatch({ type: "SIGNIN", payload: result.user });

      if (!result) {
        throw new Error("Could not complete signup..");
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

  return { login, error, isPending };
};
