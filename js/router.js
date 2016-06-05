import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import firebase from 'firebase';

import Contacts from './components/contacts';
import Details from './components/details';


let Router = Backbone.Router.extend({

routes: {
	'' : 'showContacts',
	'details/:id' : 'showDetails'
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
goto(route) {
	this.navigate(route, {
		trigger: true
	});
},

showContacts: function() {

	var contacts = this.data;
	// console.log(contacts);
	
	this.render(
	<div>
		<Contacts 
		contacts={contacts} 
		details={(id) => this.goto('details/'+id)}/>
	</div>
	);
	
},
showDetails: function(id) {
	var contacts = this.data;
	var detail = contacts.filter(function(obj){

		if(obj.id === id) {
			return obj;
		}
		
	});
	

	this.render(
		<div>
			<Details detail={detail} contacts={() => this.goto('')} />
		</div>
		);
}



});

export default Router;