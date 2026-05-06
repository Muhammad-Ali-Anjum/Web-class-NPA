import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
console.log(product);

  if (loading) return <h2 className="text-center mt-10">Loading product details...</h2>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
        <div>
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-96 object-cover rounded-lg"
          />
          {product.images && product.images.length > 0 && (
            <div className="flex gap-2 mt-4">
              {product.images.slice(0, 3).map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${product.title} ${index + 1}`} 
                  className="w-24 h-24 object-cover rounded cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          )}
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          {/* <p className="text-gray-600 mb-4">{product.dimensions}</p> */}
          
          
          <div className="space-y-2">
            <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Rating:</span> ⭐ {product.rating}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Stock:</span> {product.stock} units
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Discount:</span> {product.discountPercentage}% off
            </p>
          </div>
          
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;