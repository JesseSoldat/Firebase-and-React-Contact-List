import React from 'react';

export default React.createClass({
	render: function() {
		return(
			<div>
				<h1>Contacts</h1>
				<h3>{this.props.contacts[0].user01.firstName}</h3>
			</div>
			);
	}


});

