import MenuItem from "./MenuItem";
const MenuList = ({ list = [] }) => {
  return (
    <ul className="MenuList-Container">
      {list && list.length
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : "No items to display"}
    </ul>
  );
};

export default MenuList;
