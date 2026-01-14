console.log("hi this is my first program");

// data type
// let 
// const 
// var

var name="jone"
// console.log(name);
var name="taqi"
console.log(name);
const age=23;
const Age=34
console.log(Age);

console.log(age);

let anmes="galib"

{
    let anmes="iqbal"
    console.log(anmes);
    
}
console.log(anmes);


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;


useEffect(() => {
  // code to run
  return () => {
    // cleanup code
  }
}, [dependencies]);

useEffect(() => {
  console.log("Component mounted");
}, []);




useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

useEffect(() => {
  const handleScroll = () => console.log(window.scrollY);
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const [user, setUser] = useState({ name: "Ali", age: 20 });

setUser({ ...user, age: 21 }); // update only age


const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
setTasks([...tasks, "Task 3"]); // add a new task




import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}

export default useCounter;
Usage:
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement } = useCounter(10);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}




import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if(input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default TodoApp;
