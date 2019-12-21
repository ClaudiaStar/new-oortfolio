import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB0cMVVD5Hlq0dV1QjuXjXmnnLwQ3d6bk0",
  authDomain: "contact-claudia.firebaseapp.com",
  databaseURL: "https://contact-claudia.firebaseio.com",
  projectId: "contact-claudia",
  storageBucket: "contact-claudia.appspot.com",
  messagingSenderId: "806099206258",
  appId: "1:806099206258:web:6da0d8df528f12a71502eb",
  measurementId: "G-14Q1C0H8PB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
