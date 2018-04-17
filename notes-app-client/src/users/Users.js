import React,{Component} from 'react';
import User from './User';

//class component
class Users extends Component{
	state = {
		users: [
		{age:20,name:"john"},
		{age:30,name:"riya"},
		{age:40,name:"tiya"}
		],
		title:"Users List"
	};

	makeMeYounger = () => {
		const newState = this.state.users.map((user)=>
			{
				const tempUser= user;
				tempUser.age -=10;
				return tempUser;
			});
		this.setState({
			newState
		});

	}


	render(){
	return (
		<div>
				<button onClick={this.makeMeYounger} >Make us 10 yr Younger</button>
				<br/>
				<h3	>{this.state.title}</h3>
				{
					this.state.users.map((user)=>{
						return <User age={user.age}>{user.name}</User>
					})
				}
		</div>
		)
	}
}

export default Users;
