// import { useState, useEffect } from "react";

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//     //   try { 
//     //     const response = await fetch("https://dummyjson.com/products");
//     //     const data = await response.json();
//     //     setProducts(data.products);
//     //   } catch (error) {
//     //     console.error("Error fetching products:", error);
//     //   }
//     const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       setProducts(data.products);
//     };

//     getProducts();
//   }, []);

//   return (
//     <div className="  min-h-screen p-8">
//       <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
//         Our Products
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.slice(0, 12).map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
//           >
//             {/* Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-gray-500 mt-2 line-clamp-2">
//                 {item.description}
//               </p>
//                <span className="text-xl font-bold text-black">
//                   {item.brand}
//                 </span>

//               {/* Price + Button */}

//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-xl font-bold text-black">
//                   ${item.price}
//                 </span>
                

//                 <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data.products);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded-lg animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-56 bg-gray-200 animate-pulse"></div>
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-28 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-black"></div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Premium Collection
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-black"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our curated collection of high-quality products designed to elevate your lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0, 12).map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 relative"
              onMouseEnter={() => setHoveredProduct(item.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Discount Badge */}
              {item.discountPercentage > 10 && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                  -{Math.round(item.discountPercentage)}% OFF
                </div>
              )}

              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-md">
                <svg className="w-4 h-4 text-gray-600 hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 h-56">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 shadow-md whitespace-nowrap">
                  Quick View
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Brand */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {item.brand || "Generic"}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">
                      {item.rating?.toFixed(1) || "4.5"}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-2 group-hover:text-gray-900 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Price and Stock Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                    {item.discountPercentage > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        ${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  {item.stock > 0 ? (
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    className="flex-1 bg-black text-white px-4 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl text-sm"
                    disabled={item.stock === 0}
                  >
                    Add to Cart
                  </button>
                  <button className="p-2.5 border border-gray-300 rounded-xl hover:border-black hover:bg-black hover:text-white transition-all duration-300 group">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free shipping on orders $50+
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {products.length > 12 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;