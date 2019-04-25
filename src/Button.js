import React from "react";
import "./App.css";


const Button = ({onClick, children}) => (
  <h4 className="shuffle" onClick={onClick}>
    {children}
  </h4>
);

export default Button;
