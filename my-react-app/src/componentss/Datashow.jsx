import React from 'react'

function Datashow(props) {
  return (
    <div>
        <h1>
            name {props.name}
        </h1>
        <h2>age {props.age}</h2>
    </div>
  )
}

export default Datashow