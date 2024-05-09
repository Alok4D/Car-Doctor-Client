// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCRVVvY-ZLfUR9U8mFMErOdHQT0sCQ6q_4",
    authDomain: "car-doctor-bec53.firebaseapp.com",
    projectId: "car-doctor-bec53",
    storageBucket: "car-doctor-bec53.appspot.com",
    messagingSenderId: "83531313535",
    appId: "1:83531313535:web:b4112bc86880a602a1ea4a"
  };
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;