import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  onClickHandle = () => {
      console.log(this.firstName.value);
      // alert('Yayyy! here name: ${this.firstName.value} | ${this.lastName.value} is submitted!!! ');
  }

  onKeyUpHandle = (target,e) => {
    // console.log(e.keyCode);
    if(e.keyCode === 13)
    {
      switch(target){
        case 'firstname':
          this.lastName.focus();
        break;
        case 'lastname':
          this.age.focus();
        break;
        case 'age':
          this.submit.focus();
        break;
        default:
          this.firstName.focus();
      }
    }
  }
  render() {
    return (
      <div className="App">
        <span>First Name:</span>
        <input  ref={(input)=>{this.firstName=input}}
                type="text"
                onKeyUp={this.onKeyUpHandle.bind(this,'firstname')}/> <br/>

        <span>Last Name:</span>
        <input  ref={(input)=>{this.lastName=input}} 
                type="text"
                onKeyUp={this.onKeyUpHandle.bind(this,'lastname')}/><br/>

        <span>Age:</span>
        <input  ref={(input)=>{this.age=input}} 
                type="text"
                onKeyUp={this.onKeyUpHandle.bind(this,'age')}/><br/>

        <input  ref={(input)=>{this.submit=input}} 
                type="submit" value="Submit" 
                onClick={this.onClickHandle}
                onKeyUp={this.onKeyUpHandle.bind(this,'submit')}/>
      </div>
    );
  }
}

export default App;
