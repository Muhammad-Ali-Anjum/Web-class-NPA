import React from "react";
import img from "../assets/hero.png";
const Tour = () => {
    const tours = [
  {
    id: 1,
    title: "Hunza Valley",
    image: img ,
    location: "Gilgit Baltistan",
  },
  {
    id: 2,
    title: img,
    location: "Baltistan",
  },
  {
    id: 3,
    title: "Naran Kaghan",
    image: "https://source.unsplash.com/800x600/?river",
    location: "KPK",
  },
  {
    id: 4,
    title: "Swat Valley",
    image: "https://source.unsplash.com/800x600/?forest",
    location: "KPK",
  },
  {
    id: 5,
    title: "Murree",
    image: "https://source.unsplash.com/800x600/?snow",
    location: "Punjab",
  },
  {
    id: 6,
    title: "Fairy Meadows",
    image: "https://source.unsplash.com/800x600/?meadow",
    location: "GB",
  },
  {
    id: 7,
    title: "Neelum Valley",
    image: "https://source.unsplash.com/800x600/?valley",
    location: "AJK",
  },
  {
    id: 8,
    title: "Gwadar",
    image: "https://source.unsplash.com/800x600/?beach",
    location: "Balochistan",
  },
  
];
console.log(tours);
  return (
    <div className="bg-gray-50 min-h-screen py-14 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center ">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore Destinations
        </h1>
        <p className="text-gray-500 mt-3">
          Discover premium travel experiences across Pakistan
        </p>
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
        {/* tours.map((tour) => (t.name) */}
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="relative group rounded-2xl overflow-hidden shadow-md"
          >
            {/* Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-10 w-full">
              <p className="text-xs ps-10 text-gray-300">
                {tour.location}
              </p>

              <h2 className="text-xl font-semibold text-white">
                {tour.title}
              </h2>

              <button className="mt-3 px-4 py-2 text-xs bg-white text-black rounded-full hover:bg-gray-200 transition">
                View Tour
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tour;