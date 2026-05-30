/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import FocusTimer from "./pages/FocusTimer.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/focus-timer" element={<FocusTimer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
