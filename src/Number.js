import React from "react";
import "./App.css";

const Number = ({
  nr,
  clickableNumber,
onClick
}) => {
    return(
  <div
    className="cell"
    style={{
      backgroundColor: nr === null ? "#f3d7ca" : "#393e46",
      color:
        clickableNumber.length > 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)"
    }}
    onClick={onClick}
  >
    {nr}
  </div>
)};

export default Number;
