import React from 'react'

function Card({id, name, age, city}) {
  return (
    <div>
        {/* <h2>{props.id}</h2>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>City: {props.city}</p> */}
        <h2>{id}</h2>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>

    </div>
  )
}

export default Card