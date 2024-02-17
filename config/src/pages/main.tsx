import React from 'react'
import ReactDOM from 'react-dom/client'

import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { App } from './app';


const firebaseConfig = {
  apiKey: "AIzaSyBIucdd_9QVH--EPCcVv6rF8cM2o0Qeil8",
  authDomain: "sistema-kids-cd9c6.firebaseapp.com",
  projectId: "sistema-kids-cd9c6",
  storageBucket: "sistema-kids-cd9c6.appspot.com",
  messagingSenderId: "766160893022",
  appId: "1:766160893022:web:50e44b9a576fda4c05f0cf",
  measurementId: "G-KGEGE3Q3T7"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(
  auth, 'hhennryy@icloud.com', '@Hhenry721'
). then(user => console.log(user))
.catch(error => console.log('error', error));


ReactDOM.createRoot(document.getElementById('page')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
