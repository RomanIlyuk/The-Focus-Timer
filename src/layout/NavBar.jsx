import { NavLink } from "react-router";

function NavBar() {
  const base =
    "relative text-sm tracking-wide transition-all duration-300 px-3 py-2 rounded-lg";

  const inactive = "text-gray-400 hover:text-white hover:bg-white/5";

  const active = "text-white bg-white/5";

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center">
      <div className="mt-4 flex gap-6 px-6 py-3 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/focus-timer"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Focus Timer
        </NavLink>

        <NavLink
          to="/pet-projects"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Pet Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
