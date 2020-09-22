import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDapuROgFDWsytyr2uSlEtm4znr3mmq5Qk",
    authDomain: "clone-d29d3.firebaseapp.com",
    databaseURL: "https://clone-d29d3.firebaseio.com",
    projectId: "clone-d29d3",
    storageBucket: "clone-d29d3.appspot.com",
    messagingSenderId: "761443116364",
    appId: "1:761443116364:web:3e8ad6da3bd8b256c91be9",
    measurementId: "G-QEC0PDBB3F"
  });

//   const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};