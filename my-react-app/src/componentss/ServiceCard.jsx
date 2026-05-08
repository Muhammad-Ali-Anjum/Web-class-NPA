// function ServiceCard({ service }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
//       <img
//         src={service.image}
//         alt={service.title}
//         className="h-48 w-full object-cover"
//       />

//       <div className="p-4">
//         <h2 className="text-xl font-bold">{service.title}</h2>
//         <p className="text-gray-600 mt-2">{service.description}</p>

//         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;

function ServiceCard({ service }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-56">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Optional Badge */}
        {service.isPopular && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Popular
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title with icon */}
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h2>
          
          {/* Optional Price Badge */}
          {service.price && (
            <span className="text-lg font-bold text-blue-600">
              {service.price}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features List */}
        {service.features && (
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group">
          <span>Learn More</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
}

export default ServiceCard;