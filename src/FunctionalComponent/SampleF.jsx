import React from 'react';

export let name2 = "Ujju Upadhyay"
export let arr2 = [10,203,405,67,70]
export let emp2 = {
    id : 1002,
    name : "Shivam",
    dsg : "Trainer"
}

export function display2(){
    return (
        <h3>In display 2 function of SampleF Component</h3>
    )
}

export default function SampleF(){
    return(
        <>
        <h1>Functional Component Sample</h1>
        <h2>In Sample Functional Component.</h2>
        </>
    )
}

// import React from 'react';

// export default function SampleF(){
//     return(
//         <>
//             <h1>Functional Component Example</h1>
//             <h2>This is SampleF Component</h2>
//         </>
//     )
// }