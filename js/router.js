import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Contacts from './components/contacts';

let Router = Backbone.Router.extend({

routes: {
	'' : 'showContacts'
},

initialize: function(appElement) {
	this.el = appElement;

	
},

start: function() {
    Backbone.history.start();
},
render: function(component) {
    ReactDom.render(component, this.el);
},

showContacts: function() {
	console.log('showContacts');
	this.render(
	<div>
		<Contacts />
	</div>
	);
	
}



});

export default Router;