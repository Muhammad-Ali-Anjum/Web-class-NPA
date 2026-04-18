import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
    //   try { 
    //     const response = await fetch("https://dummyjson.com/products");
    //     const data = await response.json();
    //     setProducts(data.products);
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    getProducts();
  }, []);

  return (
    <div className="  min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 12).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {item.description}
              </p>
               <span className="text-xl font-bold text-black">
                  {item.brand}
                </span>

              {/* Price + Button */}

              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-black">
                  ${item.price}
                </span>
                

                <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;