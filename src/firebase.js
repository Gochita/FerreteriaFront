import app from 'firebase/app'
import 'firebase/firestore'
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
  app.initializeApp(firebaseConfig);
  const db= app.firestore()
  const auth= app.auth()

  export {db,auth}