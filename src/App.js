import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { CounterDisplay } from "./Pages/LandingPages/CounterDisplay";
import { CatFacts } from "./Pages/LandingPages/CatFacts";
import { Counter } from "./Pages/LandingPages/Counter";
import { CounterContext } from "./Pages/LandingPages/LandingPagesFiles.js/CounterContext";
import { Portfolio } from "./Pages/LandingPages/Portfolio";
import { useState } from "react";
import { HiddenNav } from "./components/StyledComponents";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{ count, setCount }}>
        <Routes>
          <Route path="/CounterDisplay" element={<CounterDisplay />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/catFacts" element={<CatFacts />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <HiddenNav>
          <NavLink to="/CounterDisplay">Counter Display</NavLink>
          <NavLink to="/Counter">Counter</NavLink>
          <NavLink to="/catFacts">Cat Facts</NavLink>
          <NavLink to="/Portfolio">Portfolio</NavLink>
        </HiddenNav>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
