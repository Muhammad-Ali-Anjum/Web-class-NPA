// import { useContext } from "react";
// import { TourContext } from "../context/TourContext";
// import TourCard from "../components/TourCard";

// function Home() {
//   const { tours, loading } = useContext(TourContext);

//   if (loading) {
//     return <h2 className="text-center mt-10">Loading...</h2>;
//   }

//   return (
//     <div className="grid grid-cols-3 gap-6 p-6">
//       {tours.map((tour) => (
//         <TourCard key={tour.id} tour={tour} />
//       ))}
//     </div>
//   );
// }

// export default Home;

// import React from 'react'
// import Card from '../components/Card'

// function Home() {
//   let person = {
//     id:1,
//     name:"muntazer",
//     age: 25,
//     city: "skd"
//   }
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Card id={person.id} name={person.name} age={person.age} city={person.city} />
//     </div>
//   )
// }

// export default Home
// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let isMounted = true; // prevent state update after unmount

//     (async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!res.ok) throw new Error("Failed to fetch");

//         const data = await res.json();
//         if (isMounted) setUsers(data);
//       } catch (err) {
//         if (isMounted) setError(err.message);
//       }
//     })();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {users.map((u) => (
//         <p key={u.id}>{u.name}</p>
//       ))}
//     </div>
//   );
// };

// export default Home;

// import React, { use } from 'react'
// useEffect, useState from "react";
import React, { useEffect, useState } from "react";

function Home() {
    const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
useEffect(() => {
    let isMounted = true; // prevent state update after unmount

    (async () => {
      try {
        // const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (isMounted) setUsers(data);
      } catch (err) {
        if (isMounted) setError(err.message);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);


  if (error) return <p>{error}</p>;
console.log(users);

  return (
    <div className="grid h-56 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))} */}
      {/* {users.products.map((u) => (
        <p key={u.id}>{u.title}</p>
      ))} */}
      {users.products && users.products.map((u) => (
    <div key={u.id} className="shadow-lg mt-10 rounded-lg">
    <img src={u.thumbnail} alt={u.title} className="fluid w-full h-48 object-cover" />
    <p className="">{u.stock}</p>
    <p className="font-bold text-lg text-center">{u.title}</p>
    <div className="flex justify-between items-center mt-2 px-4 ">
      <p className="mb-5 ">${u.price.toFixed(2)}</p>
      <p className="mb-5 ">{u.rating}</p>
    </div>
  </div>
      ))}
    </div>
  )
}

export default Home