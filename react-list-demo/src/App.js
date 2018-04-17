import React, { Component } from 'react';
import './App.css';
import User from './components/user';

class App extends Component {

  constructor(){
    super();
    this.state={
      users:[
        {id:"a",name:"john",age:20},
        {id:"b",name:"mark",age:30},
        {id:"c",name:"peter",age:40}
      ]
    } 
  }
  
  deleteUser = (index,e) => {
    const users= Object.assign([],this.state.users); //use to copy the users object
    users.splice(index,1);
    this.setState({users:users}); 
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map((user,index)=>
            {
              return <User  age={user.age} 
                            key={user.id}
                            delEvent={this.deleteUser.bind(this,index)}>
                            {user.name}</User>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
