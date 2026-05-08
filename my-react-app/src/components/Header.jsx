import React from "react";

function Header({ total }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
      
      <div>
        <h2 className="text-4xl font-bold">
          Trending Products
        </h2>

        <p className="text-gray-400 mt-2">
          Explore premium collections
        </p>
      </div>

      <div className="mt-4 md:mt-0">
        <span className="bg-white/10 px-5 py-3 rounded-2xl text-gray-300">
          {total} Products
        </span>
      </div>
    </div>
  );
}

export default Header;