import React from "react";
import "./formInput.css";
import { useState } from "react";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocuse = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="formInput">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocuse}
          onFocus={()=>inputProps.name==="confirmPassword" && setFocused('true')}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
}

export default FormInput;
