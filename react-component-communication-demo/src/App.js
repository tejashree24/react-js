import React, { Component } from 'react';
// import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent';
import './App.css';

class App extends Component {
  state={
    title: "placeholder title"
  }

  changeTheWorld = (newTitle) =>{
    this.setState({title:newTitle})
  }

  render() {
    return (
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this,"New World!")}
        keepTheWorldSameEvent={this.changeTheWorld.bind(this,'Same World!')} 
        title={this.state.title}/>
      </div>
    );
  }
}

export default App;
