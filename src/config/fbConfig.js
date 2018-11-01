import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// Initialize Firebase
var config = {
    //add your own firebase credentials here!
    apiKey: "AIzaSyB8dPmSytF2m-AVed-wu8PWC7AbaqG83IU",
    authDomain: "blog-backend-a1d25.firebaseapp.com",
    databaseURL: "https://blog-backend-a1d25.firebaseio.com",
    projectId: "blog-backend-a1d25",
    storageBucket: "blog-backend-a1d25.appspot.com",
    messagingSenderId: "289235725241"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;