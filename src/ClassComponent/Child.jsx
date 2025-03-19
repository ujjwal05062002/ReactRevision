import React, { Component } from 'react';

export default class Child extends Component {
    shouldComponentUpdate(){
        return false
    }
  render() {
    console.log("Child Component is rendered");
    
    return (
      <div>
        <h2>Child Component</h2>

      </div>
    );
  }
}
