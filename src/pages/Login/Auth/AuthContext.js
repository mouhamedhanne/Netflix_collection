import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const signUp = async (email, password) => {
    try {
      const userCredentiel = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredentiel.user);

      return userCredentiel;
    } catch (error) {
      throw error;
    }
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ signUp, currentUser, signIn }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
