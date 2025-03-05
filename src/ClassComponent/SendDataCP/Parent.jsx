import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component{
    constructor(){
        super()
        this.state = {
            data : []
        }     
    }

    getData(data){
        this.setState({data:data})
    }
    render(){
        return(
            <>
                <h2>Parent Component</h2>
                <h3>Lifting State up example or sending data from child to parent</h3>
                {
                    this.state.data.length?
                    <table>
                        <thead>
                            <tr>
                                <th>Id : </th>
                                <th>Name : </th>
                                <th>Designation : </th>
                                <th>Salary : </th>
                                <th>City : </th>
                                <th>State : </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((item,index)=>{
                                <tr key={index}>
                                    <th>{item.id} </th>
                                    <th>{item.name} </th>
                                    <th>{item.dsg}</th>
                                    <th>{item.salary} </th>
                                    <th>{item.city}</th>
                                    <th>{item.state}</th>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    : ""
                }
                <hr />
                <Child  />
            </>
        )
    }
}