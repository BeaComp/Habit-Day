import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBefXrI4s8sujXuHYQKfVDLRwwxryt0uRI",
  authDomain: "auth-habitday.firebaseapp.com",
  projectId: "auth-habitday",
  storageBucket: "auth-habitday.appspot.com",
  messagingSenderId: "1078663863815",
  appId: "1:1078663863815:web:ba5d56b779675630a7d4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //aqui faz a autenticacao