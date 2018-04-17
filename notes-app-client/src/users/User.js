import React from 'react';

//functional component
const User = (props) => {
		return (<div>
			Age: {props.age} | Name: {props.children}
			</div>
		);
	
}

export default User;