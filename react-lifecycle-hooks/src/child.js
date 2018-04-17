import React, { Component } from 'react';
import './App.css';

class Child extends Component {

  constructor(){
    super();
    console.log('Child constructor');
  }

  componentWillMount(){
    console.log('Child Component will mount');
  }

  componentDidMount(){
    console.log('Child Component Did Mount');
  }

  componentWillReceiveProps(){
    console.log('Component Will Receive Props');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Child Should Component Update');
    return true; //also try with return false;
  }

  render() {
    console.log('Child render');
    return (
      <div className="App">
          Child Name:{this.props.name}
      </div>
    );
  }
}

export default Child;
