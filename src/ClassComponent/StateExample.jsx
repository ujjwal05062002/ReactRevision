import React, { Component } from 'react';

export default class StateExample extends Component{
    constructor(){
        super()
        this.state = {
            num : 1
        }
    }
    decrement(){
        if(this.state.num>0)
        this.setState({num:this.state.num-1})
    }
    increment(){
        this.setState({num:this.state.num+1})
    }

    render(){
        return(
            <>
            <h1>State Example Class Component</h1>
            <h2>num = {this.state.num}</h2>
            <button onClick={()=>this.decrement()}>Decrement</button>
            <button onClick={()=>this.increment()}>Increment</button>
            </>
        )
    }
}