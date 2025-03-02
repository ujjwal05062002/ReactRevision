import React from 'react';  //optional line
import ReactDOM from 'react-dom/client'
import Sample, {name1, arr1, emp1, display1} from './ClassComponent/Sample';
import SampleF from './FunctionalComponent/SampleF';

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <Sample />
    <h3>Name1 : {name1}</h3>
    <h3>Array1 : {arr1}</h3>
    <h3>Emp1oyee ID : {emp1.id}</h3>
    <h3>Emp1oyee Name : {emp1.name}</h3>
    <h3>Emp1oyee Designation : {emp1.dsg}</h3>
    <h3>Emp1oyee City : {emp1.city}</h3>
    <h3>Emp1oyee State : {emp1.state}</h3>
    {display1()}
    <hr></hr>
    <SampleF />
    </>
)