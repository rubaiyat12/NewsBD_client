// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQgirYYu9nGB11YUjwp9Uw7rCLwHudMn8",
  authDomain: "world-news-dc4dd.firebaseapp.com",
  projectId: "world-news-dc4dd",
  storageBucket: "world-news-dc4dd.appspot.com",
  messagingSenderId: "868549230673",
  appId: "1:868549230673:web:0d4d933a544228ba4cb870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;