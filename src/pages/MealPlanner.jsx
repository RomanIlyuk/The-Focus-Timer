/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { mains } from "../data/mains";
import { garnishes } from "../data/garnishes";
import { salads } from "../data/salads";

import MainLayout from "../layout/MainLayout";
import MealPlannerHeader from "../components/MealPlanner/MealPlannerHeader";
import MealSelector from "../components/MealPlanner/MealSelector";
import MainActions from "../components/MealPlanner/MealActions";
import MealHistory from "../components/MealPlanner/MealHistory";
import { loadHistory, saveHistory } from "../utils/storage";

function MealPlanner() {
  const [meal, setMeal] = useState({
    main: "",
    garnish: "",
    salad: "",
  });

  const [history, setHistory] = useState(() => loadHistory());

  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function handleRandomMeal() {
    setMeal({
      main: mains[getRandomIndex(mains)],
      garnish: garnishes[getRandomIndex(garnishes)],
      salad: salads[getRandomIndex(salads)],
    });
  }

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  return (
    <MainLayout>
      <MealPlannerHeader />
      <MealSelector
        meal={meal}
        setMeal={setMeal}
        mains={mains}
        garnishes={garnishes}
        salads={salads}
      />
      <MainActions
        meal={meal}
        setMeal={setMeal}
        setHistory={setHistory}
        onRandomMeal={handleRandomMeal}
      />
      <MealHistory history={history} />
    </MainLayout>
  );
}

export default MealPlanner;
