import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyB9JTZfJvWRo-yQMyhu4vp7Fp_3VTJRt54",
  authDomain: "react-todo-7ffcd.firebaseapp.com",
  projectId: "react-todo-7ffcd",
  storageBucket: "react-todo-7ffcd.appspot.com",
  messagingSenderId: "312347583870",
  appId: "1:312347583870:web:e4c3d7afc7995cd887bf2f"
})

const db = firebase.firestore();

export { db };