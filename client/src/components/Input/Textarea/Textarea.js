import React from "react";
import "./style/textarea.scss";
function Textarea({
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
      <textarea
        className={
          hasErrorMessage && errorMessage
            ? "textarea-input is-invalid"
            : "textarea-input"
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

export default Textarea;
