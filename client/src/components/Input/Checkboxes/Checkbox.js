import React from "react";

function Checkbox({
  name = "",
  type = "checkbox",
  value = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  return (
    <>
      <input
        className={
          hasErrorMessage && errorMessage
            ? "checkboxOne is-invalid"
            : "checkboxOne"
        }
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />

      {hasErrorMessage && errorMessage && (
        <p className="errorMessage">{errorMessage}</p>
      )}
    </>
  );
}

export default Checkbox;
