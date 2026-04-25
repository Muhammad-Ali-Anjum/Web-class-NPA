import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TourProvider } from "./context/TourContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TourProvider>
    <App />
  </TourProvider>
);