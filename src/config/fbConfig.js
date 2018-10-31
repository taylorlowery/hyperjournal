import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// Initialize Firebase
var config = {
    //add your own firebase credentials here!
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;