import React from 'react';

import "./CSS/componentStyle.css"

let pstyle = {
    backgroundColor : "green",
    color : "white",
    textAlign : "center",
    padding : "10px"
}

export default function CSSExample(){
    return(
        <>
        <div className="main">
            <div className="center">
                <h1 style={{backgroundColor:"navy" , color: "white" , textAlign:"center", padding : "10px"}} >CSS and Image Example</h1>
                <p style={pstyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur aliquid suscipit quas nam asperiores culpa, saepe modi neque unde quis.</p>
                <div className="items">
                    <img src="/img/img1.jpg" alt="" />
                </div> 
            </div>
        </div>
        </>
    )
}