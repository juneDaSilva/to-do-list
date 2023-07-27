import './main.css';
import { loadHome } from './apps/page-loader';
export const content = document.getElementById('content');
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_YVRneQ2Ef6hoWObT6oGbfJX2OBDSKIU',
  authDomain: 'to-do-list-8e4e6.firebaseapp.com',
  projectId: 'to-do-list-8e4e6',
  storageBucket: 'to-do-list-8e4e6.appspot.com',
  messagingSenderId: '872057660504',
  appId: '1:872057660504:web:da57d711f07bcc7c45d62d',
  measurementId: 'G-G9Q6K5V5M7',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});
// Initialize Firebase
const analytics = getAnalytics(app);

loadHome();

// BUGS
// TODO:  when editing, if project isnt changed,
//        items in project lists arent changed
// TODO:  in home display, 'remove' buttons dont
//        work for cards below a certain point
// TODO:  card editing doesnt work if done from
//        projects tab (maybe same problem as TODO #1)
