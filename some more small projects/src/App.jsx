import { useState } from "react";
import "./App.css";
import LoadMore from "./components/LoadMore";
import ScrollIndicator from "./components/ScrollIndicator";
import TreeView from "./components/TreeView";
import menus from "./data/sidemenu";
import QRCodeGenerator from "./components/QRCode";
import ModeSwitch from "./components/LightDarkMode";

const App = () => {
  return (
    <div className="main-container">
      <ScrollIndicator />
      <LoadMore />
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <ModeSwitch />
    </div>
  );
};

export default App;
