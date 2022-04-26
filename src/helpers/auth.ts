import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const userID = localStorage.getItem("USER");

export const signup = (
  email: string,
  password: string,
  setLoading: (e: any) => void,
  setError: (e: any) => void
) => {
  setError("");
  setLoading(true);

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (res) => {
      setLoading(false);
      console.log(res);

      await setDoc(doc(db, `users/${res.user.uid}`), {
        email: email,
      });

      localStorage.setItem("USER", res.user.uid);
      window.location.reload();
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      setError(err.code);
    });
};

export const login = (
  email: string,
  password: string,
  setLoading: (e: any) => void,
  setError: (e: any) => void
) => {
  setError("");
  setLoading(true);

  signInWithEmailAndPassword(auth, email, password)
    .then(async (res) => {
      setLoading(false);
      console.log(res);
      localStorage.setItem("USER", res.user.uid);
      window.location.reload();
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      setError(err.code);
    });
};
