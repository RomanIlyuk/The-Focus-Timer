/* eslint-disable no-unused-vars */
import { useState } from "react";

function Home() {
  const buttonStyles = "text-teal-200 hover:underline decoration-2";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-start min-h-screen w-full px-4">
      <h1 className="text-9xl pt-20 bg-linear-to-r/longer from-indigo-500 to-teal-400 bg-clip-text text-transparent text-center">
        Explore your own ideas
      </h1>

      <p className="text-teal-200 text-4xl text-center max-w-2xl mt-12">
        Discover focus tools and creative projects that help you stay
        productive, explore new ideas, and enjoy the learning journey.
      </p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 mt-12 rounded-xl bg-indigo-500/20 text-teal-200 border-2 border-teal-400/30 hover:bg-indigo-500/30 transition text-xl duration-300 ease-in"
      >
        {isOpen ? "Show less" : "Show more"}
      </button>

      {isOpen && (
        <ul className="flex flex-col items-center gap-8 mt-12 text-2xl text-white">
          <li>
            <button className={buttonStyles}>Focus Timer</button>
          </li>
          <li>
            <button className={buttonStyles}>Pet Projects</button>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Home;
