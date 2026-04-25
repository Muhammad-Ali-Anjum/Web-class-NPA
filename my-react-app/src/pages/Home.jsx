import { useContext } from "react";
import { TourContext } from "../context/TourContext";
import TourCard from "../components/TourCard";

function Home() {
  const { tours, loading } = useContext(TourContext);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default Home;