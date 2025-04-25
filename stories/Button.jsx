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
  label,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  onClick,
  className,
  ...props
}) => {
  const baseClassName = "btn";
  const classes = [
    baseClassName,
    `btn-${variant}`,
    `btn-${color}`,
    `btn-${size}`,
    disabled ? "btn-disabled" : "",
    loading ? "btn-loading" : "",
    className || ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <span className="btn-spinner" aria-hidden="true">
          &#8203;
        </span>
      )}
      {!loading && leftIcon && (
        <span className="btn-icon btn-icon-left material-icons">{leftIcon}</span>
      )}
      <span className="btn-label">{label}</span>
      {!loading && rightIcon && (
        <span className="btn-icon btn-icon-right material-icons">{rightIcon}</span>
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
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
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
   * Additional CSS class names
   */
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "filled",
  color: "primary",
  size: "medium",
  disabled: false,
  loading: false,
  onClick: undefined,
  className: "",
};

export default Button;

