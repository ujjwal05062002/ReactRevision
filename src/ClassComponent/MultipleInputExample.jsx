import React from "react";
import { Component } from "react";

export default class MultipleInputExample extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      salary: "",
      designation: "",
      city: "",
      stateName: ""
    };
  }

  getInputExample(e) {
    let {name,value} = e.target

    this.setState(()=>{
        return {
            ...this.state,
            [name]:value
        }
    })

//     if (name === "name")
//         this.setState({name:value})
//     else if (name === "email")
//         this.setState({email:value})
//     else if (name === "phone")
//         this.setState({phone:value})
//     else if (name === "designation")
//         this.setState({designation:value})
//     else if (name === "salary")
//         this.setState({salary:value})
//     else if (name === "city")
//         this.setState({city:value})
//     else 
//         this.setState({stateName:value})
  }

  postData(e) {
    e.preventDefault()
    alert(`
        Name : ${this.state.name},
        email : ${this.state.email},
        phone : ${this.state.phone},
        salary : ${this.state.salary},
        designation : ${this.state.designation},
        city : ${this.state.city},
        state : ${this.state.stateName},
        `)
  }

  render() {
    return (
      <>
        <div className="main">
          <div className="center">

            <h2>Multiple Input Example Class Component </h2>
            <h3>name : {this.state.name}</h3>
            <h3>email : {this.state.email}</h3>
            <h3>phone : {this.state.phone}</h3>
            <h3>salary : {this.state.salary}</h3>
            <h3>designation : {this.state.designation}</h3>
            <h3>city : {this.state.city}</h3>
            <h3>state : {this.state.stateName}</h3>
            
            <input type="text" name="name" placeholder=" Name" onChange={(e) => this.getInputExample(e)}/>
            <input type="email" name="email" placeholder="email" onChange={(e) => this.getInputExample(e)}/>
            <input type="text" name="phone" placeholder="phone" onChange={(e) => this.getInputExample(e)}/>
            <input type="number" name="salary" placeholder="salary" onChange={(e) => this.getInputExample(e)}/>
            <input type="text" name="designation" placeholder="designation" onChange={(e) => this.getInputExample(e)}/>
            <input type="text" name="city" placeholder="city" onChange={(e) => this.getInputExample(e)}/>
            <input type="text" name="stateName" placeholder="state" onChange={(e) => this.getInputExample(e)}/>
            <button onClick={() => this.postData()}>Submit</button>
          </div>
        </div>
      </>
    );
  }
}
