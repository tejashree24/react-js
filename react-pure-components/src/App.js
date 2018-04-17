import React, { Component,PureComponent } from 'react';
import './App.css';


const Temp = (props) => {
  console.log('temp')
  return(<div>{props.val}</div>);
}
  
class App extends PureComponent {
  state = {
    val:1
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState(()=>{
        return {val:Math.random()}
      });
    },2000);
  } 

  // shouldComponentUpdate(nextProp,nextState){
  //   console.log('currentState',this.state);
  //   console.log('nextState',nextState);
  //   return (this.state.val === nextState.val ? false : true);
  // }

  render() {
    console.log('app');
    return (
      <div className="App">
        <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default App;
