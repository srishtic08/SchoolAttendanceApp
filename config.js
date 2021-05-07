import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyAPpvObsoHbR1TIAwmFyr-7zXFnq_V2Zdk",
    authDomain: "school-attendance-app-d7748.firebaseapp.com",
    databaseURL: "https://school-attendance-app-d7748-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-d7748",
    storageBucket: "school-attendance-app-d7748.appspot.com",
    messagingSenderId: "629017273258",
    appId: "1:629017273258:web:d7e25721ea11b16bba41d3"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}


  export default firebase.database()

  