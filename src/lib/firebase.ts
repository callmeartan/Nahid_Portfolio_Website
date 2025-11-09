import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
// TODO: Replace with Nahid Nasiri's Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "nahid-nasiri-portfolio.firebaseapp.com",
  projectId: "nahid-nasiri-portfolio",
  storageBucket: "nahid-nasiri-portfolio.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// Initialize Analytics conditionally (only in browser)
let analytics = null;
if (typeof window !== 'undefined') {
  // Initialize analytics only on the client side
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics }; 