import React, { useState } from 'react';
// import { useState } from 'react';

function About() {
  // useState
  const [count, setCount] = React.useState(0);
  const [name, setName]=useState("");
  let counter=()=>{
    setCount(count+1);
  }



  // let name="manahil";
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Count: {count}</p>

      {/* <button onClick={() => setCount(count + 1)} className='btn'>Increment</button> */}
      <button onClick={counter}>increase </button>
      <button onClick={() => setCount(count - 1)} className='btn'>Decrement</button>

    </div>
  )
}

export default About