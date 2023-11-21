import { initializeApp } from "firebase/app";
import {getAuth, FacebookAuthProvider} from "firebase/auth"

const firebaseConfig_2 = {
  apiKey: "AIzaSyAlSD_Ncvi1lW5ZIGOOy32zEOpqZB8RmfM",
  authDomain: "project-agency-99ba2.firebaseapp.com",
  projectId: "project-agency-99ba2",
  storageBucket: "project-agency-99ba2.appspot.com",
  messagingSenderId: "1098109256719",
  appId: "1:1098109256719:web:bf30a9d46b2736464e0f7a",
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig_2);
const auth2 = getAuth(app2);
const provider2 = new FacebookAuthProvider();

export { auth2, provider2 };
