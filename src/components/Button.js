import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "../assets/styles/componentStyles/button.scss";

const Button = ({
  className,
  size,
  label,
  variant,
  disabled,
  fullWidth,
  icon,
  type,
  appearance,
  disabledText,
  ...rest
}) => {
  let baseClass = "vl-button";

  let contained = fullWidth ? "fullwidth" : "";

  let buttonClasses = classNames(
    className,
    `${baseClass}`,
    `${baseClass}--${size}`,
    `${baseClass}--${variant}`,
    `${baseClass}--${contained}`,
    `${baseClass}--${appearance}`
  );

  return (
    <>
    <button className={buttonClasses} disabled={disabled} type={type} {...rest}>
      {disabled ? disabledText : label}  {icon && icon}
    </button>
   
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  type: PropTypes.string,
  appearance: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabledText: PropTypes.string,
};

Button.defaultProps = {
  size: "lg",
  label: "Button",
  disabled: false,
  variant: "primary",
  fullWidth: false,
  appearance: "fill",
  disabledText: "Submitting...",
};

export default Button;
