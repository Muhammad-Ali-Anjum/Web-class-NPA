import React, { useState } from "react";
import { motion } from "framer-motion";

const toursData = [
  {
    id: 1,
    title: "Hunza Valley",
    image: "https://source.unsplash.com/800x600/?mountain",
    location: "GB",
    price: "$299",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Skardu",
    image: "https://source.unsplash.com/800x600/?lake",
    location: "GB",
    price: "$279",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Swat Valley",
    image: "https://source.unsplash.com/800x600/?forest",
    location: "KPK",
    price: "$199",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Murree",
    image: "https://source.unsplash.com/800x600/?snow",
    location: "Punjab",
    price: "$149",
    rating: 4.3,
  },
  {
    id: 5,
    title: "Neelum Valley",
    image: "https://source.unsplash.com/800x600/?valley",
    location: "AJK",
    price: "$220",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Gwadar",
    image: "https://source.unsplash.com/800x600/?beach",
    location: "Balochistan",
    price: "$180",
    rating: 4.2,
  },
];

const filters = ["All", "GB", "KPK", "Punjab", "AJK", "Balochistan"];

const Tours = () => {
  const [active, setActive] = useState("All");

  const filteredTours =
    active === "All"
      ? toursData
      : toursData.filter((t) => t.location === active);

  return (
    <div className="bg-gray-50 min-h-screen py-14 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore Tours
        </h1>
        <p className="text-gray-500 mt-2">
          Premium destinations curated for you
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              active === item
                ? "bg-black text-white"
                : "bg-white shadow hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="
        max-w-7xl mx-auto
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {filteredTours.map((tour) => (
          <motion.div
            key={tour.id}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            {/* Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-64 object-cover"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 w-full translate-y-16 group-hover:translate-y-0 transition duration-300">
              
              <h2 className="text-xl font-semibold text-white">
                {tour.title}
              </h2>

              <div className="flex justify-between items-center mt-2 text-sm text-gray-200">
                <span>⭐ {tour.rating}</span>
                <span>{tour.price}</span>
              </div>

              <button className="mt-4 w-full bg-white text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tours;