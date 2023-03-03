import { initializeApp } from "@firebase/app";
import { getDatabase, } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBWjLWEJfyD9ta7RvFc28nQnR4rB9v03Ho",
    authDomain: "jw-fotografia.firebaseapp.com",
    projectId: "jw-fotografia",
    databaseURL: "https://jw-fotografia-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "jw-fotografia.appspot.com",
    messagingSenderId: "341909753653",
    appId: "1:341909753653:web:b25e2af76f32d26be8c67c"
};

let database;
if(process.env.NODE_ENV === 'production') {
    const app = initializeApp(firebaseConfig)
    database = getDatabase(app);
}

export {database}