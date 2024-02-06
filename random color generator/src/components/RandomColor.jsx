import "./RandomColor.css";
import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [mode, setMode] = useState("hex");

  const hexColor = () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
    }
    console.log(hex);
    setColor(hex);
    setMode("hex");
    document.body.style.backgroundColor = hex;
  };
  const rgbColor = () => {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 256));
    }
    console.log(rgb);
    setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    setMode("rgb");
    document.body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  };
  return (
    <div className="container">
      <div>
        <button onClick={hexColor}>Generate HEX Color</button>
        <button onClick={rgbColor}>Generate RGB Color</button>
        <button
          onClick={() => {
            if (mode === "hex") {
              hexColor();
            } else {
              rgbColor();
            }
          }}
        >
          Generate Random Color
        </button>
      </div>
      <h1>Random Color Generator</h1>
      <h2>Color : {color}</h2>
    </div>
  );
};

export default RandomColor;
