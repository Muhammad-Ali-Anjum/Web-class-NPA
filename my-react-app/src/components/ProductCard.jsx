import React from "react";

function ProductCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-cyan-400/40 transition-all duration-500 cursor-pointer hover:-translate-y-2"
    >
      
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
          ⭐ {item.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full capitalize">
          {item.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold mt-4 line-clamp-1">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-3 line-clamp-2">
          {item.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-2xl font-bold text-cyan-400">
              ${item.price}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Stock: {item.stock}
            </p>
          </div>

          <button className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-medium hover:bg-cyan-300 transition-all">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;