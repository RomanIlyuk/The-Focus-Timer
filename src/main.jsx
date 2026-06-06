/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import FocusTimer from "./pages/FocusTimer.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import PetProjects from "./pages/PetProjects.jsx";
import MealPlanner from "./pages/MealPlanner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/focus-timer" element={<FocusTimer />} />
        <Route path="/pet-projects" element={<PetProjects />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
