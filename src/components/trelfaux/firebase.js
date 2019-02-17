import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD8knJnK6GbyKN4mL1HU2Ew4YBGcjJf_Ls',
  authDomain: 'trelfaux.firebaseapp.com',
  databaseURL: 'https://trelfaux.firebaseio.com',
  projectId: 'trelfaux',
  storageBucket: 'trelfaux.appspot.com',
  messagingSenderId: '689023386419',
};

firebase.initializeApp(config);

export default firebase;
