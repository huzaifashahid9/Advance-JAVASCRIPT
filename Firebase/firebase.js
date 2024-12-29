 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getFirestore,collection, addDoc,getDocs,deleteDoc,doc,updateDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyClRWAQHjFkMpFCQNbH9FMDe1ujlhkEGgA",
   authDomain: "huzaifaproject1.firebaseapp.com",
   projectId: "huzaifaproject1",
   storageBucket: "huzaifaproject1.firebasestorage.app",
   messagingSenderId: "390988576683",
   appId: "1:390988576683:web:635f946eab4ec1dbc1c4ee"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)

export {app,db,collection,doc,updateDoc, addDoc,getDocs,deleteDoc}