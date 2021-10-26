import React from "react";

function Button({
  className = "",
  submitButton,
  disabled = false,
  block = false,
  small = false,
  children,
  ...props
}) {
  return (
    <button
      className={className}
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
