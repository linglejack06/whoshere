import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTnIvbU4iAZg_Axr1lVJzJ_46X-kCKjl8",
    authDomain: "who-s-here-682f8.firebaseapp.com",
    projectId: "who-s-here-682f8",
    storageBucket: "who-s-here-682f8.appspot.com",
    messagingSenderId: "280308048398",
    appId: "1:280308048398:web:c6e5078b0d13fdc8ffd25f",
    measurementId: "G-FZTJQ4ZZMR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
