import React, { Component } from 'react';

export default class Child extends Component{
    
    render(){
        return(
            <>
            <h3>Child Component</h3>
            <table border="2px solid black" cellPadding="10px">
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
                    return <tr key={index}>
                    <th>{item.id} </th>
                    <th>{item.name} </th>
                    <th>{item.dsg} </th>
                    <th>{item.salary} </th>
                    <th>{item.city} </th>
                    <th>{item.state} </th>
                    
                </tr>
                })}
                </tbody>
            </table>
            </>
        )
    }
}












// import React, { Component } from "react";

// export default class Child extends Component{
//     render(){
//         return(
//             <>
//             <h3>Child Component</h3>   
//             <h4>ID : {this.props.id}</h4>            
//             <h4>Name : {this.props.name}</h4>            
//             <h4>Designation : {this.props.dsg}</h4>            
//             <h4>City : {this.props.city}</h4>            
//             </>
//         )

//     }
// }