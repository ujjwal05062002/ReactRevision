import React, { Component } from "react";

export default class Child extends Component{
    render(){
        return(
            <>
            <h3>Child Component</h3>   
            <h4>ID : {this.props.id}</h4>            
            <h4>Name : {this.props.name}</h4>            
            <h4>Designation : {this.props.dsg}</h4>            
            <h4>City : {this.props.city}</h4>            
            </>
        )

    }
}