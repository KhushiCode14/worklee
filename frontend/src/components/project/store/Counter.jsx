// import React from "react";

// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slices/countSlice";

function Counter() {
  //   const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  //   const increment = () => setCounter(counter + 1);
  //   const decrement = () => setCounter(counter - 1);
  //   const reset = () => setCounter(0);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 text-center bg-white rounded-lg shadow-lg w-80">
        <h1 className="mb-6 text-2xl font-semibold text-gray-700">
          React Counter App
        </h1>
        <h2 className="mb-4 text-4xl font-bold text-gray-800">{count}</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none"
          >
            Increase
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none"
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
