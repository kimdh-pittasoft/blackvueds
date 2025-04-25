import React from "react";
import "./Button.css";
import { FiSettings, FiRefreshCcw } from "react-icons/fi";

const Button = ({
  label = "Button",
  color = "blue",
  variant = "filled",
  size = "medium",
  leftIcon = false,
  rightIcon = false,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={`btn ${color} ${variant} ${size} ${disabled ? "disabled" : ""}`}
      disabled={disabled || loading}
    >
      {leftIcon && !loading && <FiSettings className="icon left-icon" />}
      {loading ? <FiRefreshCcw className="icon spin" /> : label}
      {rightIcon && !loading && <FiSettings className="icon right-icon" />}
    </button>
  );
};

export { Button };
export default Button;

