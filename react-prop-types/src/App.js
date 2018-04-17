import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


const Test = (props) => {
  return(
      <div>
        <h4>{props.str}</h4>
        <h4>{props.bool ? "boolean" : "no boolean"}</h4>
        <h4>{props.strOrNum}</h4>
        <div>
          {
            props.ary.map((val)=>{
              return(
                <li key={val}>{val}</li>
                )
            })
          }
        </div>
        <div>
          {
            props.aryOfObj.map((val)=>{
              return(
                <li key={val.age}>{val.name}</li>
                )
            })
          }
        </div>
        <div>
          {
            <h3>{props.children}</h3>
          }
        </div>
      </div>
    )

}

Test.propTypes = {
  str:PropTypes.string,
  bool:PropTypes.bool,
  strOrNum:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  ary:PropTypes.arrayOf(PropTypes.number),
  aryOfObj:PropTypes.arrayOf(PropTypes.shape(
  {
    name:PropTypes.string,
    age:PropTypes.number
  })),
  children:PropTypes.element.isRequired
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test str={'Promobi'}
              bool= {true}
              strOrNum={"true"} // strOrNum={50}
              ary={[1,2,3]} 
              aryOfObj={
                [
                  {name:'john',age:20},
                  {name:'peter',age:35},
                  {name:'ana',age:15}
                ]
              }
        > 
        <div>
        Children
        </div>
         </Test>
      </div>
    );
  }
}

export default App;
