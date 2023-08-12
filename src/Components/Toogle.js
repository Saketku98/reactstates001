import React from "react";

const Toggle = ({title, date, para }) => {
  return (
    <div className="App">
      <div className="body-container">
        <h2>{title}</h2>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
          }}
        >
          {date}
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
          }}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export default Toggle;