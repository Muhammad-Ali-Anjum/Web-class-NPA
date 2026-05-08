// // import React, { useEffect, useState } from 'react';
// // import { useParams, Link } from 'react-router-dom';

// // function ProductDetails() {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await fetch(`https://dummyjson.com/products/${id}`);
// //         if (!res.ok) throw new Error("Failed to fetch product");
// //         const data = await res.json();
// //         setProduct(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);
// // console.log(product);

// //   if (loading) return <h2 className="text-center mt-10">Loading product details...</h2>;
// //   if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
// //   if (!product) return <p className="text-center mt-10">Product not found</p>;

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
// //         ← Back to Home
// //       </Link>
      
// //       <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
// //         <div>
// //           <img 
// //             src={product.thumbnail} 
// //             alt={product.title} 
// //             className="w-full h-96 object-cover rounded-lg"
// //           />
// //           {product.images && product.images.length > 0 && (
// //             <div className="flex gap-2 mt-4">
// //               {product.images.slice(0, 3).map((img, index) => (
// //                 <img 
// //                   key={index} 
// //                   src={img} 
// //                   alt={`${product.title} ${index + 1}`} 
// //                   className="w-24 h-24 object-cover rounded cursor-pointer hover:opacity-75"
// //                 />
// //               ))}
// //             </div>
// //           )}
// //         </div>
        
// //         <div>
// //           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
// //           <p className="text-gray-600 mb-4">{product.description}</p>
// //           {/* <p className="text-gray-600 mb-4">{product.dimensions}</p> */}
          
          
// //           <div className="space-y-2">
// //             <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
// //             <p className="text-gray-700">
// //               <span className="font-semibold">Brand:</span> {product.brand}
// //             </p>
// //             <p className="text-gray-700">
// //               <span className="font-semibold">Category:</span> {product.category}
// //             </p>
// //             <p className="text-gray-700">
// //               <span className="font-semibold">Rating:</span> ⭐ {product.rating}
// //             </p>
// //             <p className="text-gray-700">
// //               <span className="font-semibold">Stock:</span> {product.stock} units
// //             </p>
// //             <p className="text-gray-700">
// //               <span className="font-semibold">Discount:</span> {product.discountPercentage}% off
// //             </p>
// //           </div>
          
// //           <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// function ProductDetails() {
//   const { id } = useParams();

//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Quantity State
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://dummyjson.com/products/${id}`);

//         if (!res.ok) {
//           throw new Error("Failed to fetch product");
//         }

//         const data = await res.json();

//         setProduct(data);
//         setMainImage(data.thumbnail);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Dynamic Total Price
//   const totalPrice = product
//     ? (product.price * quantity).toFixed(2)
//     : 0;

//   // Increase Quantity
//   const increaseQty = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   // Decrease Quantity
//   const decreaseQty = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   // Loading
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
//         <h1 className="text-cyan-400 text-2xl animate-pulse">
//           Loading Product...
//         </h1>
//       </div>
//     );
//   }

//   // Error
//   if (error) {
//     return (
//       <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
//         <h1 className="text-red-500 text-2xl">{error}</h1>
//       </div>
//     );
//   }

//   if (!product) return null;

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white px-4 md:px-10 py-10">
      
//       {/* Back */}
//       <Link
//         to="/"
//         className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"
//       >
//         ← Back to Products
//       </Link>

//       {/* Main */}
//       <div className="grid lg:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl">
        
//         {/* LEFT */}
//         <div>
          
//           {/* Main Image */}
//           <div className="rounded-3xl overflow-hidden bg-white/5">
//             <img
//               src={mainImage}
//               alt={product.title}
//               className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-4 mt-5 overflow-x-auto">
//             {product.images?.map((img, index) => (
//               <div
//                 key={index}
//                 onClick={() => setMainImage(img)}
//                 className={`cursor-pointer rounded-2xl overflow-hidden border-2 ${
//                   mainImage === img
//                     ? "border-cyan-400"
//                     : "border-transparent"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt=""
//                   className="w-24 h-24 object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col justify-center">
          
//           {/* Category */}
//           <span className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full w-fit text-sm capitalize">
//             {product.category}
//           </span>

//           {/* Title */}
//           <h1 className="text-5xl font-bold mt-5">
//             {product.title}
//           </h1>

//           {/* Description */}
//           <p className="text-gray-400 leading-8 mt-6">
//             {product.description}
//           </p>

//           {/* Rating */}
//           <div className="flex items-center gap-4 mt-6">
//             <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
//               ⭐ {product.rating}
//             </div>

//             <p className="text-gray-400">
//               {product.stock} In Stock
//             </p>
//           </div>

//           {/* Price */}
//           <div className="mt-8">
//             <p className="text-gray-400 text-sm">
//               Price Per Item
//             </p>

//             <h2 className="text-4xl font-bold text-cyan-400 mt-2">
//               ${product.price}
//             </h2>
//           </div>

//           {/* Quantity Selector */}
//           <div className="mt-8">
//             <p className="text-gray-400 mb-3">
//               Select Quantity
//             </p>

//             <div className="flex items-center gap-4">
              
//               {/* Minus */}
//               <button
//                 onClick={decreaseQty}
//                 className="w-12 h-12 rounded-xl bg-white/10 hover:bg-red-500 transition text-2xl"
//               >
//                 -
//               </button>

//               {/* Quantity */}
//               <div className="w-20 h-12 flex items-center justify-center bg-white/10 rounded-xl text-xl font-semibold">
//                 {quantity}
//               </div>

//               {/* Plus */}
//               <button
//                 onClick={increaseQty}
//                 className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition text-2xl"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Dynamic Total */}
//           <div className="mt-10 bg-cyan-400/10 border border-cyan-400/20 rounded-3xl p-6">
            
//             <p className="text-gray-400 text-sm">
//               Total Price
//             </p>

//             <h2 className="text-5xl font-bold text-cyan-400 mt-2">
//               ${totalPrice}
//             </h2>

//             <p className="text-gray-500 mt-2">
//               {quantity} × ${product.price}
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-10">
            
//             <button className="flex-1 bg-cyan-400 text-black font-semibold py-4 rounded-2xl hover:bg-cyan-300 transition">
//               Add To Cart
//             </button>

//             <button className="px-6 py-4 border border-white/10 rounded-2xl hover:bg-white/10 transition">
//               ❤️
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;

// ===============================
// ProductDetails.jsx
// ===============================

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import RelatedProducts from "../components/RelatedProducts";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Quantity
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        // Product Details
        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();

        setProduct(data);
        setMainImage(data.thumbnail);

        // Related Products
        const relatedRes = await fetch(
          `https://dummyjson.com/products/category/${data.category}`
        );

        const relatedData = await relatedRes.json();

        setRelatedProducts(relatedData.products);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Dynamic Total Price
  const totalPrice = product
    ? (product.price * quantity).toFixed(2)
    : 0;

  // Increase Quantity
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease Quantity
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <h1 className="text-cyan-400 text-2xl animate-pulse">
          Loading Product...
        </h1>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <h1 className="text-red-500 text-2xl">{error}</h1>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 md:px-10 py-10">
      
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"
      >
        ← Back to Products
      </Link>

      {/* Main Product Section */}
      <div className="grid lg:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl">
        
        {/* LEFT */}
        <div>
          
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden bg-white/5">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-5 overflow-x-auto">
            {product.images?.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 ${
                  mainImage === img
                    ? "border-cyan-400"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-24 h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          
          {/* Category */}
          <span className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full w-fit text-sm capitalize">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-5xl font-bold mt-5">
            {product.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 leading-8 mt-6">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
              ⭐ {product.rating}
            </div>

            <p className="text-gray-400">
              {product.stock} In Stock
            </p>
          </div>

          {/* Price */}
          <div className="mt-8">
            <p className="text-gray-400 text-sm">
              Price Per Item
            </p>

            <h2 className="text-4xl font-bold text-cyan-400 mt-2">
              ${product.price}
            </h2>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="text-gray-400 mb-3">
              Select Quantity
            </p>

            <div className="flex items-center gap-4">
              
              {/* Minus */}
              <button
                onClick={decreaseQty}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-red-500 transition text-2xl"
              >
                -
              </button>

              {/* Quantity */}
              <div className="w-20 h-12 flex items-center justify-center bg-white/10 rounded-xl text-xl font-semibold">
                {quantity}
              </div>

              {/* Plus */}
              <button
                onClick={increaseQty}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition text-2xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Dynamic Total */}
          <div className="mt-10 bg-cyan-400/10 border border-cyan-400/20 rounded-3xl p-6">
            
            <p className="text-gray-400 text-sm">
              Total Price
            </p>

            <h2 className="text-5xl font-bold text-cyan-400 mt-2">
              ${totalPrice}
            </h2>

            <p className="text-gray-500 mt-2">
              {quantity} × ${product.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            
            <button className="flex-1 bg-cyan-400 text-black font-semibold py-4 rounded-2xl hover:bg-cyan-300 transition">
              Add To Cart
            </button>

            <button className="px-6 py-4 border border-white/10 rounded-2xl hover:bg-white/10 transition">
              ❤️
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        products={relatedProducts}
        currentProductId={product.id}
      />
    </div>
  );
}

export default ProductDetails;