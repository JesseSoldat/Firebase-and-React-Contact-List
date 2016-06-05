import $ from 'jquery';
import firebase from 'firebase';

var appElement = $('.app');

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

// function writeUserData(userId, name, email) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email
//   });
//   }
//   writeUserData('03', 'Joe', 'joelab@hotmail.com');
