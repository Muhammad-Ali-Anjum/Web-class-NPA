import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
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

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {users.products && users.products.map((u) => (
        <div 
          key={u.id} 
          className="shadow-lg mt-10 rounded-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
          onClick={() => handleCardClick(u.id)}
        >
          <img 
            src={u.thumbnail} 
            alt={u.title} 
            className="w-full h-48 object-cover rounded-t-lg" 
          />
          <div className="p-4">
            <p className="text-sm text-gray-500">Stock: {u.stock}</p>
            <p className="font-bold text-lg text-center mt-2">{u.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-green-600 font-bold">${u.price.toFixed(2)}</p>
              <p className="text-yellow-500">⭐ {u.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;