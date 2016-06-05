
import firebase from 'firebase';

import Router from './router';

let appElement = document.querySelector('.app');


new Router(appElement).start();;



 var config = {
    apiKey: "AIzaSyCWfPHBoLxrwJewP95yJ0VdysfDLTiOK-k",
    authDomain: "reactcontactbook.firebaseapp.com",
    databaseURL: "https://reactcontactbook.firebaseio.com",
    storageBucket: "reactcontactbook.appspot.com",
  };
  firebase.initializeApp(config);

function writeUserData(userId, firstName, lastName, email, telephone) {
  firebase.database().ref('users/' + userId).set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    telephone: telephone
  });
 }

writeUserData('01', 'Joe','Rivers', 'joelab@hotmail.com', '515-324-6756');


