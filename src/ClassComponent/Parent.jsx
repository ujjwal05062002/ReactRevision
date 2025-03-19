import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    
    constructor(){
        super()
        this.state ={
            num : 1
        }
    }

  render() {
    return (
      <div>
        <h1>Should Component Update VS Pure Component</h1>
        <h2>Parent Component</h2>
        <h3>num = {this.state.num}</h3>
        <button onClick={()=>this.setState({num:this.state.num+1})}>increment</button>
        <hr />
        <Child />
      </div>
    );
  }
}
