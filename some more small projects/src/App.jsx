import { useState } from "react";
import "./App.css";
import LoadMore from "./components/LoadMore";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => {
  return (
    <div className="main-container">
      <ScrollIndicator />
      <LoadMore />
    </div>
  );
};

export default App;
