import React from "react";
import "./button.css";

const STYLES = [
  "yes--primary--outline",
  "no--primary--solid",
  "yes--success--outline"
];

const SIZES = ["no--medium", "no--large","yes--medium", "yes--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  hover
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`${hover} ${checkButtonStyle} ${checkButtonSize}`}
    
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
