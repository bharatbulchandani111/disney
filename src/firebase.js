import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDf-XIBd2mI7Qh7mcCC6u1wbLbsFxXi6IM",
  authDomain: "disney-plus-28fe0.firebaseapp.com",
  projectId: "disney-plus-28fe0",
  storageBucket: "disney-plus-28fe0.appspot.com",
  messagingSenderId: "667661129300",
  appId: "1:667661129300:web:30ffcd531d05c1a4a93fc1",
  measurementId: "G-5EZLWYZ8M9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
