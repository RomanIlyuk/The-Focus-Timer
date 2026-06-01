import { Link } from "react-router";

function HomeMenu({ isOpen }) {
  const buttonStyles = "text-teal-200 hover:underline decoration-2 transition";

  return (
    <div className="relative mt-12">
      <ul
        className={`
          flex flex-col items-center gap-8 text-2xl text-white origin-top transition-all duration-500 ease-out

          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 scale-95 blur-sm pointer-events-none"
          }
        `}
      >
        <li className="transition-all duration-300 hover:scale-105">
          <Link className={buttonStyles} to="/focus-timer">
            Start focus session
          </Link>
        </li>

        <li className="transition-all duration-300 hover:scale-105">
          <Link className={buttonStyles} to="/pet-projects">
            Research your projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeMenu;
