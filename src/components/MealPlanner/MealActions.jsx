/* eslint-disable no-unused-vars */
function MealActions({ meal, setMeal, setHistory }) {
  function handleSave() {
    setHistory((cur) => [
      ...cur,
      {
        ...meal,
        date: new Date().toLocaleString(),
      },
    ]);
  }

  function handleReset() {
    setMeal({
      main: "",
      garnish: "",
      salad: "",
    });
  }

  const buttonStyle =
    "text-xl text-white border-2 border-indigo-500 rounded-lg p-3 hover:bg-slate-800";

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button className={buttonStyle}>Random meal</button>

      <button onClick={handleSave} className={buttonStyle}>
        Save meal
      </button>

      <button onClick={handleReset} className={buttonStyle}>
        Reset
      </button>
    </div>
  );
}

export default MealActions;
