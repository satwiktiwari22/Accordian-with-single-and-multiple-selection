import MenuList from "./MenuList";
import "./TreeView.css";
const TreeView = ({ menus = [] }) => {
  return (
    <div className="TreeView-Container">
      <div className="menu-container">
        <MenuList list={menus} />
      </div>
    </div>
  );
};

export default TreeView;
