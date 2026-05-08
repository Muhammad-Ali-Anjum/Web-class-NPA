import React from "react";
import { useNavigate } from "react-router-dom";

function RelatedProducts({ products, currentProductId }) {
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Related Products
        </h2>

        <p className="text-gray-400 mt-2">
          You may also like these products
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {products
          .filter((item) => item.id !== currentProductId)
          .slice(0, 4)
          .map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl cursor-pointer hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                
                {/* Category */}
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full capitalize">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mt-4 line-clamp-1">
                  {item.title}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between mt-5">
                  
                  <p className="text-2xl font-bold text-cyan-400">
                    ${item.price}
                  </p>

                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {item.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RelatedProducts;