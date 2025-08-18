import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA92WvOhi4WfQwQIiAn_szZkMAPKp5KNXg",
  authDomain: "blitz-insights-89e46.firebaseapp.com",
  projectId: "blitz-insights-89e46",
  storageBucket: "blitz-insights-89e46.firebasestorage.app",
  messagingSenderId: "47672155765",
  appId: "1:47672155765:web:4bafb798f7e9398e50a23c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
