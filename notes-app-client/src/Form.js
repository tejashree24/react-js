import React from 'react';
 
export default class Form extends React.Component {
 	state = {
 		firstName: "teju",
 		lastName: "",
 		username: "",
 		email: "",
 		password: ""
 	};

 	change = e => {
 		this.setState({
 			[e.target.name]:e.target.value
 		});
 	};

 	onSubmit = e => {
 		e.preventDefault();
 		console.log(this.state);
 	}
 	render() {
 		return (
 			<form>
 				<input 	name="firstName"	
 						placeholder="First Name" 
 						value={this.state.firstName} 
 						onChange={e => this.change(e)}
 						/> &nbsp;
 				<input 	name="lastName"
 						placeholder="Last Name" 
 						value={this.state.lastName} 
 						onChange={e => this.change(e)}
 						/> &nbsp;
 				<input 	name="userName"
 						placeholder="User Name" 
 						value={this.state.userName} 
 						onChange={e => this.change(e)}
 						/> &nbsp;
 				<input 	name="email"
 						placeholder="Email" 
 						value={this.state.email} 
 						onChange={e => this.change(e)}
 						/> &nbsp;
 				<input 	name="password"
 						type="password"
 						placeholder="Password" 
 						value={this.state.password} 
 						onChange={e => this.change(e)}
 						/>
 				<button onClick={e =>this.onSubmit(e)}>Submit</button>
 			</form>
 			)
 	}
 }