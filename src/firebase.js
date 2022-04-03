import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDCo3JeOBCvIYGMavpNsWxHspDZGqtdH-M",
    authDomain: "ferreteria-e7b82.firebaseapp.com",
    projectId: "ferreteria-e7b82",
    storageBucket: "ferreteria-e7b82.appspot.com",
    messagingSenderId: "44845894288",
    appId: "1:44845894288:web:17e81184b407b2acea6615",
    measurementId: "G-DVGXYRBMGX"
  };
  
  // Initialize Firebase
  const fire = initializeApp(firebaseConfig);
  export const db=getFirestore(fire)

  export default fire;