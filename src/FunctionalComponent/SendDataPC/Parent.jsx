import React from 'react';
import Child from './Child';

export default function Parent(){
    var data = [
        {id : 1001, name: "Shaily Upadhyay", dsg : "Engineer",  salary: 99990, city: "Ghaziabad", state: "Uttar Pradesh"},
        {id : 1002, name: "Gaurav Upadhyay", dsg : "Engineer",  salary: 35336, city: "Muzaffarnagar", state: "Uttar Pradesh"},
        {id : 1003, name: "Kamal Upadhyay", dsg : "Engineer",  salary: 43690, city: "Faridabad", state: "Haryana"},
        {id : 1004, name: "Vimal Upadhyay", dsg : "Police",  salary: 74322, city: "Bariley", state: "Uttar Pradesh"},
        {id : 1005, name: "Aviral Upadhyay", dsg : "Student",  salary: 736223, city: "Noida", state: "Uttar Pradesh"}
    ]
    return(
        <>
        <h1>Parent Component</h1>
        <h2>Sending data from parent to child in functional component</h2>
        <hr />
        <Child id={1001} name="Ujjwal Upadhyay" dsg="Trainee" data = {data}/>
        </>
    )
}