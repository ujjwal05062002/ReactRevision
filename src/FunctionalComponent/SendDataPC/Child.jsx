import React from "react";

export default function Child(props){
    return(
        <>
        <h2>Child Component</h2>

        <h3>Name : {props.name}</h3>

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
                {props.data.map((item,index)=>{
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