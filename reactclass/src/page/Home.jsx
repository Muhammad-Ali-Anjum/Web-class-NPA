import React from 'react'
import Header from '../components/Header'
import About from '../page/About'

function Home() {

let person = {
  id:1,
    name: "Saqlain",
    age: 20,
    city: "Karachi"
}
  return (
    <div>
      <Header/>
     
      <h1>{person.name}</h1>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
       <About key={person.id} name={person.name} age={person.age} city={person.city} />
    </div>
  )
}

export default Home