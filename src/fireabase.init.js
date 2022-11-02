// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   /*  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID, */
  apiKey: "AIzaSyDOOIQNr-0VuUqXSu9ur28IR9T7kJGvokw",
  authDomain: "bagsq-4ed48.firebaseapp.com",
  projectId: "bagsq-4ed48",
  storageBucket: "bagsq-4ed48.appspot.com",
  messagingSenderId: "581433338558",
  appId: "1:581433338558:web:b4224cc0fe5baaf7bf4cef",
  measurementId: "G-HDNFLDPB9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;