import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAlSD_Ncvi1lW5ZIGOOy32zEOpqZB8RmfM",
  authDomain: "project-agency-99ba2.firebaseapp.com",
  projectId: "project-agency-99ba2",
  storageBucket: "project-agency-99ba2.appspot.com",
  messagingSenderId: "1098109256719",
  appId: "1:1098109256719:web:bf30a9d46b2736464e0f7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
