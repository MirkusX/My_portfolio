import { useContext } from "react";
import { CounterContext } from "./LandingPagesFiles/CounterContext";

export const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};
