import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import client from './client';
import startApp from './shared/startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
