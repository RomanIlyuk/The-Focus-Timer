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
        <button className={buttonStyles}>Focus Timer</button>
      </li>
      <li>
        <button className={buttonStyles}>Pet Projects</button>
      </li>
    </ul>
  );
}

export default HomeMenu;
