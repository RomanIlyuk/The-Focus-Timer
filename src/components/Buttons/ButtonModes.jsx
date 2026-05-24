function ButtonModes({ children, isActive, onClick }) {
  const baseStyles = "px-4 py-2 rounded-full transition-all duration-200";

  const activeStyles = "bg-slate-500 text-white font-medium";

  const inactiveStyles = "text-slate-300 hover:bg-slate-600";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
    >
      {children}
    </button>
  );
}

export default ButtonModes;
