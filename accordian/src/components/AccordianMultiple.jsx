import React, { useState } from "react";
import "./Accordian.css";

const AccordianMultiple = () => {
  const data = [
    { id: 1, title: "Section 1", content: "Content 1" },
    { id: 2, title: "Section 2", content: "Content 2" },
    { id: 3, title: "Section 3", content: "Content 3" },
    { id: 4, title: "Section 4", content: "Content 4" },
  ];
  const [selected, setSelected] = useState([]);
  const handleClick = (id) => {
    if (selected.indexOf(id) === -1) {
      setSelected([...selected, id]);
      return;
    }
    setSelected(selected.filter((item) => item !== id));
  };
  return (
    <div className="container">
      <h1>Accordian Multiple</h1>
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
            {selected.indexOf(item.id) === -1 ? (
              <span
                style={{
                  marginLeft: "30px",
                  marginRight: "20px",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
                onClick={() => handleClick(item.id)}
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
                onClick={() => handleClick(item.id)}
              >
                -
              </span>
            )}
            {selected.indexOf(item.id) !== -1 && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default AccordianMultiple;
