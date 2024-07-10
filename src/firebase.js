import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDR24YGVoxh-NwtkmRbgXuimcihZr7USmY",
  authDomain: "disney-plus-clone-6c069.firebaseapp.com",
  projectId: "disney-plus-clone-6c069",
  storageBucket: "disney-plus-clone-6c069.appspot.com",
  messagingSenderId: "689161395466",
  appId: "1:689161395466:web:a54fd9f77e799de7deaef3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
