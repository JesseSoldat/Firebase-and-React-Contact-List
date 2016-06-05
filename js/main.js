
import firebase from 'firebase';

import Router from './router';

 var config = {
    apiKey: "AIzaSyCWfPHBoLxrwJewP95yJ0VdysfDLTiOK-k",
    authDomain: "reactcontactbook.firebaseapp.com",
    databaseURL: "https://reactcontactbook.firebaseio.com",
    storageBucket: "reactcontactbook.appspot.com",
  };
  firebase.initializeApp(config);

function writeUserData(userId, firstName, lastName, email, telephone) {
  firebase.database().ref('users/' + userId).set({
    id: userId,
    firstName: firstName,
    lastName: lastName,
    email: email,
    telephone: telephone
  });
 }

writeUserData('user01', 'Joe','Rivers', 'joelab@hotmail.com', '515-324-6756');
writeUserData('user02', 'James','King', 'jameslab@hotmail.com', '515-324-9956');
writeUserData('user03', 'Sam','Wally', 'samlab@hotmail.com', '515-324-1946');
writeUserData('user04', 'Marcia','Soldat', 'marcialab@hotmail.com', '515-324-1666');
writeUserData('user05', 'Mark','Soldat', 'marklab@hotmail.com', '515-324-1229');


var ref = firebase.database().ref('users/').on('value', function(snapshot) {
  // console.log(snapshot.val());
  let data = snapshot.val();
  let dataArr = [];

    
for (var prop in data) {
  dataArr.push(data[prop]);
}
  // console.log(dataArr);
  // let user01 = data.user01;
  // console.log(user01);
  // var root = document.getElementById('root');

  // $.each(data, function(key, value) {
  //   console.log(value);
  //   email = value.email;
  //   name = value.username;
    // var li = document.createElement("li"); 
    // var li = $("<li></lu>").text(name+": "+" "+email);
    // var br = $("<br />");
    // li.textContent = email;
    // $(root).append(li, br);
    // $(root).append(br); 
    let appElement = document.querySelector('.app');
    new Router(appElement, dataArr).start();;
  });




  
