import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="p-6 border-2 border-black rounded-xl w-72 text-center mx-auto shadow-lg mt-8 hover:scale-105">
      <h2 className="text-2xl font-extrabold mb-6 text-black tracking-wide drop-shadow">
       <span className="text-9xl text-blue-900">{count}</span>
      </h2>
      <div className="flex justify-center gap-6 mb-4">
        <button
          onClick={decrement}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow transition-all duration-200 active:scale-95 disabled:bg-red-300 disabled:cursor-not-allowed"
          disabled={count === 0}
        >
          −
        </button>
        <button
          onClick={increment}
          className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow transition-all duration-200 active:scale-95"
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-600 italic">
      </p>
    </div>
  );
}