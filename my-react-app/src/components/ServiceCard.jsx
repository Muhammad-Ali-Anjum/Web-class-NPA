function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={service.image}
        alt={service.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{service.title}</h2>
        <p className="text-gray-600 mt-2">{service.description}</p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;