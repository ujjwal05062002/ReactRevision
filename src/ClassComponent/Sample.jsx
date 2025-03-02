import React, {Component} from "react";

export let name1 = "Ujjwal Upadhyay"
export let arr1 = [10,20,30,40,50]
export let emp1  = {
    id : 1001,
    name : "Ujjwal Upadhyay",
    dsg : "Trainee",
    city : "Meerut",
    state  : "Uttar Pradesh"
}

export function display1(){
    return(
        <h3>in display1() function of Sample Component</h3>
    )
}

export default class Sample extends Component{
    render(){
        return(
            <>
            <h1>Class Component Example</h1>
            <h2>This is Sample Component</h2>
            </>
        )
    }
}