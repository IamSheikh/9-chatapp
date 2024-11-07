import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1vfaiu1HVLxM1H-ngwU47S07HyCYCfWo',
  authDomain: 'burgers-chatapp.firebaseapp.com',
  projectId: 'burgers-chatapp',
  storageBucket: 'burgers-chatapp.firebasestorage.app',
  messagingSenderId: '742886541533',
  appId: '1:742886541533:web:fc2bfa364dd3adb0077334',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
