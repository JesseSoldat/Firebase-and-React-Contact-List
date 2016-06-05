import React from 'react';

export default React.createClass({
	contacts: function(){
		this.props.contacts();
	},
	render: function(){
		return(
			<div>
			<h3>{this.props.detail[0].firstName} {this.props.detail[0].lastName}</h3>
			<h4>{this.props.detail[0].email}</h4>
			<h4>{this.props.detail[0].telephone}</h4>
			<a href="" onClick={() => this.contacts()}>Back to Contacts</a>
			</div>
			);
	}
});