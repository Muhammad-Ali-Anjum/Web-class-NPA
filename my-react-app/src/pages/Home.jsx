// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // function Home() {
// // //   const [users, setUsers] = useState([]);
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     let isMounted = true;

// // //     (async () => {
// // //       try {
// // //         const res = await fetch("https://dummyjson.com/products");
// // //         if (!res.ok) throw new Error("Failed to fetch");
// // //         const data = await res.json();
// // //         if (isMounted) setUsers(data);
// // //       } catch (err) {
// // //         if (isMounted) setError(err.message);
// // //       }
// // //     })();

// // //     return () => {
// // //       isMounted = false;
// // //     };
// // //   }, []);

// // //   if (error) return <p>{error}</p>;

// // //   const handleCardClick = (productId) => {
// // //     navigate(`/product/${productId}`);
// // //   };

// // //   return (
// // //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
// // //       {users.products && users.products.map((u) => (
// // //         <div 
// // //           key={u.id} 
// // //           className="shadow-lg mt-10 rounded-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
// // //           onClick={() => handleCardClick(u.id)}
// // //         >
// // //           <img 
// // //             src={u.thumbnail} 
// // //             alt={u.title} 
// // //             className="w-full h-48 object-cover rounded-t-lg" 
// // //           />
// // //           <div className="p-4">
// // //             <p className="text-sm text-gray-500">Stock: {u.stock}</p>
// // //             <p className="font-bold text-lg text-center mt-2">{u.title}</p>
// // //             <div className="flex justify-between items-center mt-2">
// // //               <p className="text-green-600 font-bold">${u.price.toFixed(2)}</p>
// // //               <p className="text-yellow-500">⭐ {u.rating}</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // import React, { useEffect, useMemo, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Home() {
// //   const [products, setProducts] = useState([]);
// //   const [error, setError] = useState("");

// //   // Filters
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("All");
// //   const [maxPrice, setMaxPrice] = useState(1000);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     let isMounted = true;

// //     (async () => {
// //       try {
// //         const res = await fetch("https://dummyjson.com/products");

// //         if (!res.ok) throw new Error("Failed to fetch");

// //         const data = await res.json();

// //         if (isMounted) {
// //           setProducts(data.products);
// //         }
// //       } catch (err) {
// //         if (isMounted) setError(err.message);
// //       }
// //     })();

// //     return () => {
// //       isMounted = false;
// //     };
// //   }, []);

// //   // Categories
// //   const categories = useMemo(() => {
// //     return ["All", ...new Set(products.map((p) => p.category))];
// //   }, [products]);

// //   // Filter Products
// //   const filteredProducts = useMemo(() => {
// //     return products.filter((item) => {
// //       const matchSearch = item.title
// //         .toLowerCase()
// //         .includes(search.toLowerCase());

// //       const matchCategory =
// //         category === "All" || item.category === category;

// //       const matchPrice = item.price <= maxPrice;

// //       return matchSearch && matchCategory && matchPrice;
// //     });
// //   }, [products, search, category, maxPrice]);

// //   const handleCardClick = (id) => {
// //     navigate(`/product/${id}`);
// //   };

// //   if (error) {
// //     return (
// //       <div className="h-screen flex items-center justify-center text-red-500 text-xl">
// //         {error}
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#0f172a] text-white flex">
      
// //       {/* SIDEBAR */}
// //       <aside className="w-[300px] bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 sticky top-0 h-screen">
        
// //         {/* Logo */}
// //         <div className="mb-10">
// //           <h1 className="text-3xl font-bold tracking-wide">
// //             Shop<span className="text-cyan-400">X</span>
// //           </h1>

// //           <p className="text-gray-400 text-sm mt-2">
// //             Discover modern products
// //           </p>
// //         </div>

// //         {/* Search */}
// //         <div className="mb-6">
// //           <label className="text-sm text-gray-300 mb-2 block">
// //             Search
// //           </label>

// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //             className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition-all"
// //           />
// //         </div>

// //         {/* Category */}
// //         <div className="mb-6">
// //           <label className="text-sm text-gray-300 mb-2 block">
// //             Category
// //           </label>

// //           <select
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition-all"
// //           >
// //             {categories.map((cat, index) => (
// //               <option
// //                 key={index}
// //                 value={cat}
// //                 className="bg-slate-900"
// //               >
// //                 {cat}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* Price */}
// //         <div className="mb-8">
// //           <div className="flex justify-between mb-2">
// //             <label className="text-sm text-gray-300">
// //               Max Price
// //             </label>

// //             <span className="text-cyan-400 font-semibold">
// //               ${maxPrice}
// //             </span>
// //           </div>

// //           <input
// //             type="range"
// //             min="0"
// //             max="1000"
// //             value={maxPrice}
// //             onChange={(e) => setMaxPrice(e.target.value)}
// //             className="w-full accent-cyan-400"
// //           />
// //         </div>

// //         {/* Reset */}
// //         <button
// //           onClick={() => {
// //             setSearch("");
// //             setCategory("All");
// //             setMaxPrice(1000);
// //           }}
// //           className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-2xl hover:bg-cyan-300 transition-all duration-300"
// //         >
// //           Reset Filters
// //         </button>
// //       </aside>

// //       {/* MAIN */}
// //       <main className="flex-1 p-8">
        
// //         {/* Topbar */}
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
// //           <div>
// //             <h2 className="text-4xl font-bold">
// //               Trending Products
// //             </h2>

// //             <p className="text-gray-400 mt-2">
// //               Explore premium collections
// //             </p>
// //           </div>

// //           <div className="mt-4 md:mt-0">
// //             <span className="bg-white/10 px-5 py-3 rounded-2xl text-gray-300">
// //               {filteredProducts.length} Products
// //             </span>
// //           </div>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
// //           {filteredProducts.map((item) => (
// //             <div
// //               key={item.id}
// //               onClick={() => handleCardClick(item.id)}
// //               className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-cyan-400/40 transition-all duration-500 cursor-pointer hover:-translate-y-2"
// //             >
              
// //               {/* Image */}
// //               <div className="overflow-hidden relative">
// //                 <img
// //                   src={item.thumbnail}
// //                   alt={item.title}
// //                   className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
// //                 />

// //                 <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-sm">
// //                   ⭐ {item.rating}
// //                 </div>
// //               </div>

// //               {/* Content */}
// //               <div className="p-5">
                
// //                 {/* Category */}
// //                 <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full capitalize">
// //                   {item.category}
// //                 </span>

// //                 {/* Title */}
// //                 <h3 className="text-xl font-semibold mt-4 line-clamp-1">
// //                   {item.title}
// //                 </h3>

// //                 {/* Description */}
// //                 <p className="text-gray-400 text-sm mt-3 line-clamp-2">
// //                   {item.description}
// //                 </p>

// //                 {/* Bottom */}
// //                 <div className="flex items-center justify-between mt-6">
// //                   <div>
// //                     <p className="text-2xl font-bold text-cyan-400">
// //                       ${item.price}
// //                     </p>

// //                     <p className="text-xs text-gray-500 mt-1">
// //                       Stock: {item.stock}
// //                     </p>
// //                   </div>

// //                   <button className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-medium hover:bg-cyan-300 transition-all">
// //                     View
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // export default Home;

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { use } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  const navigate = useNavigate();
// useEffect(() => {

// }, []);
// function(){

// }();
// ()=>{}()

  useEffect(() => {
    let isMounted = true;
// async function fetchProducts() {
//   try {
//     const res = await fetch("https://dummyjson.com/products");
//     if (!res.ok) throw new Error("Failed to fetch");
//     const data = await res.json();
//     if (isMounted) setProducts(data.products);
//   } catch (err) {
//     if (isMounted) setError(err.message);
//   }
// }
// fetchProducts();
    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        if (isMounted) {
          setProducts(data.products);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  // Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(item => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || item.category === category;

      const matchPrice = item.price <= maxPrice;

      return matchSearch && matchCategory && matchPrice;
    });
  }, [products, search, category, maxPrice]);
console.log(products);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
    // <a href={`/product/${id}`}>View Product</a>
  };

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex text-white">
      
      {/* Sidebar */}
      <FilterSidebar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      {/* Main */}
      <main className="flex-1 p-8">

        <Header total={filteredProducts.length} />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onClick={() => handleCardClick(item.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

// import React from 'react'
// import Props from '../components/props'



// function Home() {
//   let obj={
//     username:"rukhsana",
//     password:123,
//   }
//   return (
//     <>
//     <h1>login</h1>
//     <Props username={obj.username} password={obj.password} />
//     </>
//   )
// }

// export default Home


// import React from "react";
// import Card from "./Card";

// const Home = () => {
//   const tourData = [
//     {
//       id: 1,
//       title: "Hunza Valley Tour",
//       image:
//         "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
//       price: "$250",
//     },
//     {
//       id: 2,
//       title: "Skardu Adventure",
//       image:
//         "https://images.unsplash.com/photo-1519046904884-53103b34b206",
//       price: "$300",
//     },
//     {
//       id: 3,
//       title: "Fairy Meadows Trip",
//       image:
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//       price: "$280",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//       {tourData.map((tour) => (
//         <Card key={tour.id} data={tour} />
//       ))}
//     </div>
//   );
// };

// export default Home;

//  import React from "react";

// const Card = ({ data }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//       <img
//         src={data.image}
//         alt={data.title}
//         className="w-full h-52 object-cover"
//       />

//       <div className="p-4">
//         <h2 className="text-xl font-bold">{data.title}</h2>

//         <p className="text-gray-600 mt-2">{data.price}</p>

//         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
