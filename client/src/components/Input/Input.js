import React from "react";

function Input({
  type = "text",
  name = "",
  label = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  return (
    <div>
      <input
        className={
          hasErrorMessage && errorMessage
            ? "register-inputs is-invalid"
            : "register-inputs"
        }
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="errorMessage">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
