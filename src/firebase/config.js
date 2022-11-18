import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCcsdgBkM7pExfQBoCE8Ip9Y6GRfejCng8",
    authDomain: "vue-blog-project-34a99.firebaseapp.com",
    projectId: "vue-blog-project-34a99",
    storageBucket: "vue-blog-project-34a99.appspot.com",
    messagingSenderId: "684747029638",
    appId: "1:684747029638:web:b2127b7094d4bd7bd1e507"
  };

//   initialize firebase
firebase.initializeApp(firebaseConfig);

//database setup
let db=firebase.firestore();
export{db}