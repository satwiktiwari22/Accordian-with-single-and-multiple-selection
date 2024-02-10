import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [value, setValue] = useState("");
  return (
    <div className="Container">
      <h2>QR Code Generator</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",

          alignItems: "center",
        }}
      >
        <h3>Enter The Value:</h3>
        <input
          type="text"
          id="value"
          name="value"
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            fontSize: "1.2rem",
          }}
        />
      </div>
      <QRCode value={value} />
      <h3>Scan the QR Code</h3>
    </div>
  );
};

export default QRCodeGenerator;
