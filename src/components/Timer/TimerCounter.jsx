/* eslint-disable no-unused-vars */

function TimerCounter({ count, setCount }) {
  return (
    <div>
      <p className="text-gray-300 text-lg">
        Session : <span className="font-bold text-lime-500">{count}</span>
      </p>
    </div>
  );
}

export default TimerCounter;
