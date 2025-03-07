import React from "react";

import { Component } from "react";

export default class SingleInputExample extends Component {

    constructor(){
        super()
        this.state = {
            name : ""
        }
    }

    getInputData(e){
        // console.log(e.target.value);        
        this.setState({name : e.target.value})
    }

    postData(){
        if (this.state.name === "")
            alert('please enter your name')
        else
            alert(`Hello ${this.state.name}`)
    }
    
  render() {
    return (
      <>
        <div className="main">
          <div className="center">
            <h2>Class Component Input Example</h2>
            <h3>Name : {this.state.name}</h3>
            <form action="">
            <input type="text" name="name" onChange={(e)=>this.getInputData(e)} placeholder="Full Name" />
            <button onClick={()=>this.postData()}>Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

