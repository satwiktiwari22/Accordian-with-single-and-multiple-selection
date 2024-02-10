import MenuList from "./MenuList";
import { useState } from "react";
const MenuItem = ({ item }) => {
  const [display, setDisplay] = useState(false);
  const handleToggle = () => {
    setDisplay((prev) => !prev);
  };
  return item.children && item.children.length ? (
    <li className="Item-Container">
      {item.label}
      <p onClick={handleToggle}>{display ? "▼" : "►"}</p>
      {display && <MenuList list={item.children} />}
    </li>
  ) : (
    <li className="Item-Container">{item.label}</li>
  );
};

export default MenuItem;
