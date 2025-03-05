import React, {Component} from 'react';

export default class Child extends Component{
    constructor(){
        super()
        data = [
            {id : 1001, name: "Shaily Upadhyay", dsg : "Engineer",  salary: 99990, city: "Ghaziabad", state: "Uttar Pradesh"},
            {id : 1002, name: "Gaurav Upadhyay", dsg : "Engineer",  salary: 35336, city: "Muzaffarnagar", state: "Uttar Pradesh"},
            {id : 1003, name: "Kamal Upadhyay", dsg : "Engineer",  salary: 43690, city: "Faridabad", state: "Haryana"},
            {id : 1004, name: "Vimal Upadhyay", dsg : "Police",  salary: 74322, city: "Bariley", state: "Uttar Pradesh"},
            {id : 1005, name: "Aviral Upadhyay", dsg : "Student",  salary: 736223, city: "Noida", state: "Uttar Pradesh"}
        ]
    }
    render(){
        return(
            <>
            <h2>Child Component</h2>
            
            </>
        )
    }
}