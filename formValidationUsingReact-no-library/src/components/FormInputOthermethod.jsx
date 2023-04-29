import React from "react";
import "./formInput.css";

function FormInput(props) {
  return (
    <>
      <div className="formInput">
        {/* <label>UserName</label> */}
        <input
          placeholder={props.placeholder}
          // onChange={(e) => props.setUsername(e.target.value)}   used for useState props handling
          // for useRef use below
          // ref={props.refer}
          name={props.name}
        />
      </div>
    </>
  );
}

export default FormInput;
