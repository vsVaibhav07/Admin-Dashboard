import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCVslAyE8a__JtA0MQC83NRNejZvEPpuFA",
    authDomain: "madrocket-4dd08.firebaseapp.com",
    projectId: "madrocket-4dd08",
    storageBucket: "madrocket-4dd08.firebasestorage.app",
    messagingSenderId: "1010617812919",
    appId: "1:1010617812919:web:df913e79be9abab3dc8a32",
    measurementId: "G-Y6Z93VMFD3",
    databaseURL: "https://madrocket-4dd08-default-rtdb.asia-southeast1.firebasedatabase.app//"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const database = getDatabase(app);
