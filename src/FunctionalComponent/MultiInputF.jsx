import React from 'react';
import { useState } from 'react';

export default function MultiInputF(){

    let [data,setData] = useState(
        {
            name : "",
            email : "",
            phone : "",
            designation : "",
            salary : "",
            city : "",
            state : ""
        }
    )

    function getInputData(e){
        let {name,value} = e.target
        setData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    function postData(e){
        e.preventDefault()
        alert(`
            Name : ${data.name},
            Email : ${data.email},
            Phone : ${data.phone},
            Designation : ${data.designation},
            Salary : ${data.salary},
            City : ${data.city},
            State : ${data.state}
            `)
    }



    return(
        <>
        <div className="main">
            <div className="center">
                <h2>Functional Component</h2>
                <h3>Name : {data.name}</h3>
                <h3>Email : {data.email}</h3>
                <h3>Phone : {data.phone}</h3>
                <h3>Designation : {data.designation}</h3>
                <h3>Salary : {data.salary}</h3>
                <h3>City : {data.city}</h3>
                <h3>State : {data.state}</h3>
                <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
                <input type="email" name="email" onChange={getInputData} placeholder='Email' />
                <input type="text" name="phone" onChange={getInputData} placeholder='Phone' />
                <input type="text" name="designation" onChange={getInputData} placeholder='Designation' />
                <input type="number" name="salary" onChange={getInputData} placeholder='Salary' />
                <input type="text" name="city" onChange={getInputData} placeholder='City' />
                <input type="text" name="state" onChange={getInputData} placeholder='State' />
                <button onClick={postData}>Submit</button>
            </div>
        </div>
        </>
    )
}