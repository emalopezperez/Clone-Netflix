import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyDm-5DaN-LeVeE5alaxtSNg5Um_Lhq9xag',

  authDomain: 'netflix-react-fa45d.firebaseapp.com',

  projectId: 'netflix-react-fa45d',

  storageBucket: 'netflix-react-fa45d.appspot.com',

  messagingSenderId:'831267864770',

  appId: '1:831267864770:web:1342e5e23955426b58fb5b'

};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

