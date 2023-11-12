import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-BAAHClMmQ4UMBZoxieMbKQ886Q_TQ5M",
  authDomain: "netflixcollection-d2448.firebaseapp.com",
  projectId: "netflixcollection-d2448",
  storageBucket: "netflixcollection-d2448.appspot.com",
  messagingSenderId: 919970792945,
  appId: "1:919970792945:web:aff7655fc82326dcbef050",
  measurementId: "G-1YVKK2LT9K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
