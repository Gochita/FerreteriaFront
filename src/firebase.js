import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyDCo3JeOBCvIYGMavpNsWxHspDZGqtdH-M",
//     authDomain: "ferreteria-e7b82.firebaseapp.com",
//     projectId: "ferreteria-e7b82",
//     storageBucket: "ferreteria-e7b82.appspot.com",
//     messagingSenderId: "44845894288",
//     appId: "1:44845894288:web:17e81184b407b2acea6615",
//     measurementId: "G-DVGXYRBMGX"
//   };

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN1KshswGIMBUBPef7PdrIvMc4oUl-lkA",
  authDomain: "ferreteria2-df493.firebaseapp.com",
  projectId: "ferreteria2-df493",
  storageBucket: "ferreteria2-df493.appspot.com",
  messagingSenderId: "647239137482",
  appId: "1:647239137482:web:3254c60fafaa48a26adc33"
};
  
  // Initialize Firebase
  const fire = initializeApp(firebaseConfig);
  export const db=getFirestore(fire)

  export default fire;