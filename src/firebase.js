// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmI65UEE_LmI9jts2AG7G-OaXh3UPQL-U",
  authDomain: "fabestia-thesaurus.firebaseapp.com",
  projectId: "fabestia-thesaurus",
  storageBucket: "fabestia-thesaurus.appspot.com",
  messagingSenderId: "299087412016",
  appId: "1:299087412016:web:6d6b868fc01849a77866f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
