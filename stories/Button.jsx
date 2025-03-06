// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ 
  primary, 
  variant, 
  size, 
  label, 
  icon, 
  iconPosition, 
  disabled, 
  loading, 
  onClick,
  className, 
  theme
}) => {
  // 색상 변형에 따른 클래스
  const variantClass = variant ? `btn-${variant}` : primary ? 'btn-primary' : 'btn-default';
  
  // 크기에 따른 클래스
  const sizeClass = size ? `btn-${size}` : 'btn-md';
  
  // 테마에 따른 클래스
  const themeClass = theme === 'dark' ? 'theme-dark' : 'theme-light';
  
  // 상태에 따른 클래스
  const stateClass = loading ? 'btn-loading' : disabled ? 'btn-disabled' : '';
  
  // 아이콘 위치에 따른 클래스
  const iconClass = icon ? (iconPosition === 'right' ? 'icon-right' : 'icon-left') : '';

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${themeClass} ${stateClass} ${iconClass} ${className || ''}`}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {loading ? (
        <span className="spinner"></span>
      ) : (
        <>
          {icon && iconPosition !== 'right' && <span className="btn-icon">{icon}</span>}
          {label && <span className="btn-text">{label}</span>}
          {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'purple']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark'])
};

Button.defaultProps = {
  primary: false,
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left',
  onClick: undefined,
  className: '',
  theme: 'light'
};

export default Button;