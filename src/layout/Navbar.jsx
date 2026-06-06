/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <>
      {/* Burger button */}
      <button
        onClick={handleToggle}
        className="fixed top-5 left-5 text-3xl z-[60] text-indigo-500 hover:text-indigo-600 transition"
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 bg-black/50 z-[40]
          transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-slate-950 text-teal-200 z-[50] 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl absolute top-4 right-4 text-indigo-500 hover:text-indigo-600 transition"
        >
          ✕
        </button>

        {/* Nav links */}
        <nav className="flex flex-col gap-5 mt-20 px-6 text-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-indigo-500 hover:text-indigo-600 hover:underline"
          >
            Home
          </NavLink>

          <NavLink
            to="/focus-timer"
            onClick={() => setIsOpen(false)}
            className="text-indigo-500 hover:text-indigo-600 hover:underline"
          >
            Focus Timer
          </NavLink>

          <NavLink
            to="/pet-projects"
            onClick={() => setIsOpen(false)}
            className="text-indigo-500 hover:text-indigo-600 hover:underline"
          >
            Pet Projects
          </NavLink>

          <NavLink
            to="/meal-planner"
            onClick={() => setIsOpen(false)}
            className="text-indigo-500 hover:text-indigo-600 hover:underline"
          >
            Meal planner
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Navbar2;
