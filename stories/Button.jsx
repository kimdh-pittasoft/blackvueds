import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "filled",
  color = "primary",
  size = "medium",
  isBox = false,
  label,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  onClick = () => {},
  ...props
}) => {
  const baseClassName = "btn";
  const variantClassName = `btn-${variant}`;
  const colorClassName = `btn-${color}`;
  const sizeClassName = `btn-${size}`;
  const boxClassName = isBox ? "btn-box" : "";
  const loadingClassName = loading ? "loading" : "";
  
  const className = [
    baseClassName,
    variantClassName,
    colorClassName,
    sizeClassName,
    boxClassName,
    loadingClassName,
  ].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="loading-spinner" />}
      {!loading && leftIcon && (
        <span className="material-icons">{leftIcon}</span>
      )}
      {!loading && <span>{label}</span>}
      {!loading && rightIcon && (
        <span className="material-icons">{rightIcon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(["filled", "outlined", "text"]),
  /**
   * Button color scheme
   */
  color: PropTypes.oneOf(["primary", "secondary", "danger", "violet"]),
  /**
   * Button size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Left icon (Material Icons)
   */
  leftIcon: PropTypes.string,
  /**
   * Right icon (Material Icons)
   */
  rightIcon: PropTypes.string,
  /**
   * Disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Loading state
   */
  loading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Box style with larger border radius
   */
  isBox: PropTypes.bool,
};

Button.defaultProps = {
  variant: "filled",
  color: "primary",
  size: "medium",
  isBox: false,
  disabled: false,
  loading: false,
  onClick: () => {},
};

export default Button;

