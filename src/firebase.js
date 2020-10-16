import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCoJy3u1rPrq1G5OaCHk-cnV22RjR83GXU",
  authDomain: "duplicateslack.firebaseapp.com",
  databaseURL: "https://duplicateslack.firebaseio.com",
  projectId: "duplicateslack",
  storageBucket: "duplicateslack.appspot.com",
  messagingSenderId: "1049091357300",
  appId: "1:1049091357300:web:f1e6babe05d5a744d5af21",
  measurementId: "G-KGWMW83RVE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };

export default db ; 