// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZndS3n2at-zxjrjrXge6vGwgacQr3DsI",
  authDomain: "sneaker-store-34e07.firebaseapp.com",
  projectId: "sneaker-store-34e07",
  storageBucket: "sneaker-store-34e07.appspot.com",
  messagingSenderId: "772419175202",
  appId: "1:772419175202:web:0a10b0deb2dd0da4f49b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };