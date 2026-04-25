import { createContext, useEffect, useState } from "react";
import { fetchTours } from "../api/tourApi";

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const data = await fetchTours();
        setTours(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  return (
    <TourContext.Provider value={{ tours, loading }}>
      {children}
    </TourContext.Provider>
  );
};