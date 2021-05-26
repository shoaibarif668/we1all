import firebase from 'firebase'
require('firebase/auth')
// import database from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBxBIc3BpdVz2zwZin6NSo9s4FV4aG36Es",
    authDomain: "we1all-4449c.firebaseapp.com",
    databaseURL: "https://we1all-4449c-default-rtdb.firebaseio.com",
    projectId: "we1all-4449c",
    storageBucket: "we1all-4449c.appspot.com",
    messagingSenderId: "486349251417",
    appId: "1:486349251417:web:2b3125d8fd69f293e3a248"
  };

  var fireDb = firebase.initializeApp(firebaseConfig);
  // export default fireDb.database().ref();
  export default fireDb;