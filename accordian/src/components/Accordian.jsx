import "./Accordian.css";
import React, { useState } from "react";
const Accordian = () => {
  const data = [
    { id: 1, title: "Section 1", content: "Content 1" },
    { id: 2, title: "Section 2", content: "Content 2" },
    { id: 3, title: "Section 3", content: "Content 3" },
    { id: 4, title: "Section 4", content: "Content 4" },
  ];
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h1>Accordian</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="part">
            <h2
              style={{
                display: "inline",
              }}
            >
              {item.title}
            </h2>
            {selected !== item.id ? (
              <span
                style={{
                  marginLeft: "30px",
                  marginRight: "20px",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setSelected(item.id === selected ? null : item.id);
                  console.log(item.id);
                }}
              >
                +
              </span>
            ) : (
              <span
                style={{
                  marginLeft: "30px",
                  marginRight: "20px",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setSelected(item.id === selected ? null : item.id);
                  console.log(item.id);
                }}
              >
                -
              </span>
            )}
            {selected === item.id && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
