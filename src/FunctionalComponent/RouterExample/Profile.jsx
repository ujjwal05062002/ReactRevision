import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  let {id,name,salary}  = useParams()
  return (
    <div>
      <h1>This is Profile Component</h1>
      <h2>Id : {id}</h2>
      <h2>Name : {name}</h2>
      <h2>Salary : {salary}</h2>
    </div>
  );
}
