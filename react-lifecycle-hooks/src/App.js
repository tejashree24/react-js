import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  
  state={
    name: 'peter'
  }
  constructor(){
    super();
    this.state={
      name : 'john'
    };
    console.log('constructor');
  }

  componentWillMount(){
    if(window.innerWidth > 500 )
    {
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('Component will mount');
  }

  componentDidMount(){
    console.log('Component Did Mount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Should Component Update');
    return true; //also try with return false;
  }

  changeState(){
    this.setState({
      name: "asdfgh"
    });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        Name:{this.state.name} <br/>
        innerWidth: {this.state.innerWidth}
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>Change state</button>
      </div>
    );
  }
}

export default App;
