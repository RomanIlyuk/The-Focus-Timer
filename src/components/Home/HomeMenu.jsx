import { Link } from "react-router";

function HomeMenu({ isOpen }) {
  const buttonStyles = "text-teal-200 hover:underline decoration-2";

  return (
    <ul
      className={`
          flex flex-col items-center gap-8 mt-12 text-2xl text-white
          transition-all duration-500 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }
        `}
    >
      <li>
        <Link className={buttonStyles} to="/focus-timer">
          Focus Timer
        </Link>
      </li>
      <li>
        <Link className={buttonStyles} to="/pet-projects">
          Pet Projects
        </Link>
      </li>
    </ul>
  );
}

export default HomeMenu;
