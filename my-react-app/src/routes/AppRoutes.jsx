import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TourDetails from "../pages/TourDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour/:id" element={<TourDetails />} />
    </Routes>
  );
}

export default AppRoutes;