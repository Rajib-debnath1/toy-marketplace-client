// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey:import.meta.env.VITE_apiKey,
    // authDomain:import.meta.env.VITE_authDomain,
    // projectId:import.meta.env.VITE_projectId,
    // storageBucket:import.meta.env.VITE_storageBucket,
    // messagingSenderId:import.meta.env.VITE_messagingSenderId,
    // appId:import.meta.env.VITE_appId
    apiKey: "AIzaSyDtYtpqMDMDlaEIp4oygZEGtjr6mZjwsXc",
    authDomain: "funny-toys-43a6e.firebaseapp.com",
    projectId: "funny-toys-43a6e",
    storageBucket: "funny-toys-43a6e.appspot.com",
    messagingSenderId: "252812530531",
    appId: "1:252812530531:web:7aa77d3e519369c1fdf956",
    measurementId: "G-KW3X49HFQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app