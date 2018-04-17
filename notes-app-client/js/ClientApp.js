// import React from 'react';
// import ReactDOM from 'react-dom';

var MyTitle = React.createClass({
	render() {
		return React.createElement('div',null,
					React.createElement('h1',null,'React Practice')
					)

	}
})

const MyFirstComponent = function() {
				return React.createElement('div',null,
					// React.createElement('h4',null,'This is my First Component!')
					React.createElement(MyTitle,null)
					)
			}

			ReactDOM.render(
				React.createElement(MyFirstComponent),
				document.getElementById('app')
				)

