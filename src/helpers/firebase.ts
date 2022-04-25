import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzF_XS7v45GbxtVbrDuFGtC_8xemuqC6k",
  authDomain: "saddle-up-website.firebaseapp.com",
  projectId: "saddle-up-website",
  storageBucket: "saddle-up-website.appspot.com",
  messagingSenderId: "792434412431",
  appId: "1:792434412431:web:58dcea04204f69906759fa",
  measurementId: "G-4EW6Z1YJCY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
