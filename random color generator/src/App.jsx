import React from "react";
import "./App.css";
import RandomColor from "./components/RandomColor";

// rgb color contains 3 values, each value ranges from 0 to 255
// hex color contains 6 values, each value ranges from 0 to f

const App = () => {
  return (
    <>
      <RandomColor />
    </>
  );
};

export default App;
