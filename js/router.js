import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import firebase from 'firebase';

import Contacts from './components/contacts';


let Router = Backbone.Router.extend({

routes: {
	'' : 'showContacts'
},

initialize: function(appElement, data) {
	this.el = appElement;
	
	this.data = data;

},

start: function() {
    Backbone.history.start();
},
render: function(component) {
    ReactDom.render(component, this.el);
},

showContacts: function() {

	var contacts = this.data;
	console.log(contacts);
	
	this.render(
	<div>
		<Contacts contacts={contacts} />
	</div>
	);
	
}



});

export default Router;