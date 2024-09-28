// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcl65ziDD3e2SHPyQ_Nc7O4d4vDTUfh9s",
    authDomain: "website-e2722.firebaseapp.com",
    projectId: "website-e2722",
    storageBucket: "website-e2722.appspot.com",
    messagingSenderId: "6778521866",
    appId: "1:6778521866:web:b28cbda4301c0c1df9d2f3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export { auth };
