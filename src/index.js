import React from 'react';  //optional line
import ReactDOM from 'react-dom/client'
import Sample from './ClassComponent/Sample';
import SampleF from './FunctionalComponent/SampleF';

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <Sample />
    <hr></hr>
    <SampleF />
    </>
)