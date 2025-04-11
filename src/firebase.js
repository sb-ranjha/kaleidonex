// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcVxzsknoN465b90GYnmjsbPoRUbzbNZI",
  authDomain: "certificate-185e2.firebaseapp.com",
  projectId: "certificate-185e2",
  storageBucket: "certificate-185e2.appspot.com",
  messagingSenderId: "1051548319236",
  appId: "1:1051548319236:web:8004a30d0b45cf3135bf51",
  measurementId: "G-ETX8XY75M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Only initialize analytics if window is available (client-side)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
