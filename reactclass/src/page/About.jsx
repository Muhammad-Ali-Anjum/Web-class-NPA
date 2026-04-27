import React from 'react'

function About(props) {
  return (
    <div>About props
      <h1>Name {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  )
}

export default About