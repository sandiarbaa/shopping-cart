"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default CounterValue;
