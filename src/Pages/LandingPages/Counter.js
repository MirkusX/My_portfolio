import { useContext } from "react";
import { CounterContext } from "./LandingPagesFiles/CounterContext";

export const Counter = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
};
