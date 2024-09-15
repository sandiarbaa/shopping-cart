"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { decrement, increment } from "@/redux/slices/counterSlice";
// import { RootState } from "@/redux/store";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  // const [counter, setCounter] = useState<number>(0);
  // const counter = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    // setCounter((count) => count + 1);
    dispatch(increment());
    // alert("increment");
  };
  const handleDecrement = () => {
    // setCounter((count) => count - 1);
    dispatch(decrement());
  };

  return (
    <div>
      <h1 className="text-5xl font-semibold italic text-blue-500">
        Redux Counter
      </h1>
      <div className="flex justify-center items-center space-x-8 font-bold text-5xl mt-5">
        <button onClick={handleDecrement}>
          <p>-</p>
        </button>
        <p>{counter}</p>
        <button onClick={handleIncrement}>
          <p>+</p>
        </button>
      </div>
    </div>
  );
};

export default Counter;
