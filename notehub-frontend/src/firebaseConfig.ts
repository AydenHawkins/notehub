// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// Replace with your actual config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDo60jfccNukzf7JNxDEbqIod73Mo4vAsM",
    authDomain: "notehub-ae776.firebaseapp.com",
    projectId: "notehub-ae776",
    storageBucket: "notehub-ae776.firebasestorage.app",
    messagingSenderId: "604256184307",
    appId: "1:604256184307:web:ad0b65b8e8659c8e5b9486",
    measurementId: "G-E1W0PMJMVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// If you want to use analytics, uncomment the line below and ensure getAnalytics is imported
export const analytics = getAnalytics(app);

export default app;