import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase web app configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsgNoEteSqCUxTd-Q-tRNL9n_7sKdyrtA",
    authDomain: "infinity-3ec90.firebaseapp.com",
    databaseURL: "https://infinity-3ec90-default-rtdb.firebaseio.com",
    projectId: "infinity-3ec90",
    storageBucket: "infinity-3ec90.appspot.com",
    messagingSenderId: "432687773331",
    appId: "1:432687773331:web:5f406db8e91ad8bc3ebf66",
    measurementId: "G-QB9H5SF8RY"
  };

  // Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);

export {firebaseApp}

