import { useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScroll(position);
    setHeight(totalHeight);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "5px",
        backgroundColor: "black",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          width: `${(scroll / height) * 100}%`,
          height: "100%",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
