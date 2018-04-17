import React from 'react';

const user = (props) => {
	return(
		<li>
			<span>Name:{props.children} || Age:{props.age}</span> &nbsp; &nbsp;
			<button onClick={props.delEvent}>Delete</button>
		</li>
		)
}

export default user;