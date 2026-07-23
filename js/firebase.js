// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCf_Kx_ASA5F-ym8KKi3KwSh8Yo1FPuiUg",
    authDomain: "minidots-ee1de.firebaseapp.com",
    databaseURL: "https://minidots-ee1de-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "minidots-ee1de",
    storageBucket: "minidots-ee1de.firebasestorage.app",
    messagingSenderId: "717424414180",
    appId: "1:717424414180:web:723b2795d0418892b9cbf1"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);