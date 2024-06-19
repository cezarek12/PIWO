// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCTIXnX9iImdFdKEfAivu7Kj8weovlwfFY",
  
    authDomain: "piwo-react-lab-4.firebaseapp.com",
  
    projectId: "piwo-react-lab-4",
  
    storageBucket: "piwo-react-lab-4.appspot.com",
  
    messagingSenderId: "209237946425",
  
    appId: "1:209237946425:web:1c4a17fab34bccf6861de8",
  
    measurementId: "G-6BR4YG07LJ"
  
  };
  
  

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;  // Ensure this line is present if you need to export firebaseApp
