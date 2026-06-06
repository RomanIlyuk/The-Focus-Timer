/* eslint-disable no-unused-vars */

function MealSelector({ meal, setMeal, mains, garnishes, salads }) {
  return (
    <div className="flex flex-col items-center gap-6 pt-10 pb-10">
      {/* MAIN */}
      <div className="flex flex-col gap-2">
        <label className="text-indigo-500 text-xl">Main</label>

        <select
          className="w-64 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          value={meal.main}
          onChange={(e) =>
            setMeal((prev) => ({
              ...prev,
              main: e.target.value,
            }))
          }
        >
          <option value="">Select main</option>

          {mains.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* GARNISH */}
      <div className="flex flex-col gap-2">
        <label className="text-indigo-500 text-xl">Garnish</label>

        <select
          className="w-64 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          value={meal.garnish}
          onChange={(e) =>
            setMeal((prev) => ({
              ...prev,
              garnish: e.target.value,
            }))
          }
        >
          <option value="">Select garnish</option>

          {garnishes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* SALAD */}
      <div className="flex flex-col gap-2">
        <label className="text-indigo-500 text-xl">Salad</label>

        <select
          className="w-64 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          value={meal.salad}
          onChange={(e) =>
            setMeal((prev) => ({
              ...prev,
              salad: e.target.value,
            }))
          }
        >
          <option value="">Select salad</option>

          {salads.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MealSelector;
