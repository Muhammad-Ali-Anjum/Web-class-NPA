function TourCard({ tour }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
      <img
        src={tour.image}
        alt={tour.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{tour.title}</h2>
        <p className="text-gray-500">{tour.location}</p>
        <p className="text-green-600 font-semibold">Rs {tour.price}</p>

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TourCard;