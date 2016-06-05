import React from 'react';

export default React.createClass({
	extractData: function(data){
		
		return(
			<div key={data.id}>
					<h4>{data.firstName} {data.lastName}</h4>
			</div>
			);
	},
	render: function() {
		return(
			<div>
				<h1>Contacts</h1>
				<h4>{this.props.contacts.map(this.extractData)}</h4>
				
			</div>
			);
	}


});

