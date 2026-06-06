const spanClasses = "font-semibold text-indigo-400";

function MealHistory({ history }) {
  return (
    <section className="mt-12 flex flex-col items-center">
      <h2 className="mb-6 text-2xl font-bold text-indigo-500">Meal History</h2>

      <div className="flex flex-col gap-4 w-full max-w-xl">
        {history.map((item) => (
          <div
            key={item.date}
            className="rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg"
          >
            <p className="mb-2 text-sm text-gray-400">{item.date}</p>

            <div className="space-y-1 text-white">
              <p>
                <span className={spanClasses}>Main:</span>
                {item.main}
              </p>

              <p>
                <span className={spanClasses}>Garnish:</span>
                {item.garnish}
              </p>

              <p>
                <span className={spanClasses}>Salad:</span>
                {item.salad}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MealHistory;
