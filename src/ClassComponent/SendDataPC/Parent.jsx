import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component{
    constructor(){
        super()
        this.data = [
            {id : 1001, name: "Shaily Upadhyay", dsg : "Trainer",  salary: 99990, city: "Ghaziabad", state: "Uttar Pradesh"},
            {id : 1002, name: "Gaurav Upadhyay", dsg : "Trainer",  salary: 99990, city: "Muzaffarnagar", state: "Uttar Pradesh"},
            {id : 1003, name: "Kamal Upadhyay", dsg : "Trainer",  salary: 99990, city: "Faridabad", state: "Haryana"},
            {id : 1004, name: "Vimal Upadhyay", dsg : "Trainer",  salary: 99990, city: "Bariley", state: "Uttar Pradesh"},
            {id : 1005, name: "Aviral Upadhyay", dsg : "Trainer",  salary: 99990, city: "Noida", state: "Uttar Pradesh"}
        ]
    }
    render(){
        return(
            <>
            <h2>Class component example to send data from parent component to child component</h2>
            <h3>Parent Component</h3>
            <hr />
            <Child id={1001} name = "Ujjwal Upadhyay" dsg ="Trainee" city = "Meerut" data = {this.data} />
            </>
        )
    }
}



















// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component{
//     constructor(){
//         super()
//         this.data = [
//             {id : 1001, name: "Shaily Upadhyay", dsg : "Trainer",  salary: 99990, city: "Ghaziabad", state: "Uttar Pradesh"},
//             {id : 1002, name: "Gaurav Upadhyay", dsg : "Trainer",  salary: 99990, city: "Muzaffarnagar", state: "Uttar Pradesh"},
//             {id : 1003, name: "Kamal Upadhyay", dsg : "Trainer",  salary: 99990, city: "Faridabad", state: "Haryana"},
//             {id : 1004, name: "Vimal Upadhyay", dsg : "Trainer",  salary: 99990, city: "Bariley", state: "Uttar Pradesh"},
//             {id : 1005, name: "Aviral Upadhyay", dsg : "Trainer",  salary: 99990, city: "Noida", state: "Uttar Pradesh"}
//         ]
//     }
//     render(){
//         return(
//             <>
//             <h2>Class component example to send data from parent component to child component</h2>
//             <h3>Parent Component</h3>
//             <hr />
//             <Child id={1001} name = "Ujjwal Upadhyay" dsg ="Trainee" city = "Meerut" data = {this.data} />
//             </>
//         )
//     }
// }