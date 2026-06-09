const buttonStyle =
  "text-lg text-white border-2 border-indigo-500 rounded-lg p-3 hover:bg-slate-800";

const disabledButtonStyle =
  "text-lg text-white border-2 border-gray-600 rounded-lg p-3 bg-gray-800 opacity-50 cursor-not-allowed";

function MealActions({ meal, setMeal, setHistory, onRandomMeal, isDuplicate }) {
  function handleSave() {
    if (!meal.main || !meal.garnish || !meal.salad) return;

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

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button onClick={onRandomMeal} className={buttonStyle}>
        Random meal
      </button>

      <button
        onClick={handleSave}
        className={isDuplicate ? disabledButtonStyle : buttonStyle}
        disabled={isDuplicate}
      >
        Save meal
      </button>

      <button onClick={handleReset} className={buttonStyle}>
        Reset
      </button>
    </div>
  );
}

export default MealActions;
