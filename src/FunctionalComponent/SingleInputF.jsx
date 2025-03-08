import React, { useState } from "react";

export default function SingleInputF() {
  let [name, setName] = useState("");

  function getInputData(e) {
    setName(e.target.value);
  }

  function postData() {
    if (name) {
      alert(`Hello ` + name);
    } else {
      alert("Please enter name");
    }
  }

  return (
    <>
      <div className="main">
        <div className="center">
          <h2>Functional Component Input Example</h2>
          <h3>Name : {name}</h3>
          <input
            type="text"
            name="name"
            onChange={getInputData}
            placeholder="Full Name"
          />
          <button onClick={postData}>Submit</button>
        </div>
      </div>
    </>
  );
}