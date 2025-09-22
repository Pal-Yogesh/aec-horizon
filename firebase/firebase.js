import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAdShlETl41YyrxOYLYoQ4Ak7NAjUovwE",
  authDomain: "aec-horizon.firebaseapp.com",
  projectId: "aec-horizon",
  storageBucket: "aec-horizon.firebasestorage.app",
  messagingSenderId: "725631798365",
  appId: "1:725631798365:web:d2ef0b4287d14f6d50d1b4",
  measurementId: "G-4DR2B7PJWM",
};

const app = initializeApp(firebaseConfig);

export default app;
