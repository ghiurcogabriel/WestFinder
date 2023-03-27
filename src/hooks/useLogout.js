import { useState } from "react";
import { authUser } from "../Firebase/Config";
import { useAuthContext } from "./useAuthContext";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export const useLogout = () => {
  //cleanup states
  const [isCancelled, setIsCancelled] = useState(false);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(authUser);
      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err);
        setError(err);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
