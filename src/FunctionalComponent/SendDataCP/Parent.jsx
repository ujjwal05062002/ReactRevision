import React, {useState} from 'react';
import Child from './Child';

export default function Parent(){
    let [data, setData] = useState([])
    function getData(data){
        setData(data)
    }
    return(
        <>
        <h2>Parent Component</h2>
        <h3>Lifting State Up Functional Component</h3>

        {
            data.length?
            <table border="2px solid black" cellPadding="10px">
            <thead>
              <tr>
                <th>Id  </th>
                <th>Name  </th>
                <th>Designation  </th>
                <th>Salary  </th>
                <th>City  </th>
                <th>State  </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{item.id} </th>
                    <th>{item.name} </th>
                    <th>{item.dsg} </th>
                    <th>{item.salary} </th>
                    <th>{item.city} </th>
                    <th>{item.state} </th>
                  </tr>
                );
              })}
            </tbody>
          </table>  : ""
        }

        <hr />
        <Child getData={getData} />
        </>
    )
}