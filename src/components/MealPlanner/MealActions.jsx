/* eslint-disable no-unused-vars */
function MealActions({ meal, setMeal, setHistory }) {
  const buttonStyle =
    "text-xl text-white border-2 border-indigo-500 rounded-lg p-3 hover:bg-slate-800";

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button className={buttonStyle}>Save meal</button>

      <button className={buttonStyle}>Reset</button>
    </div>
  );
}

export default MealActions;
