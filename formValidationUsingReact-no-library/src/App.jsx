import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const initialValue = {
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};

const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "User Name",
    errorMessage: "Username should be 3-16 characters and should not include any special characters.",
    label: "User Name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email",
    label: "Email",
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    label: "Password",
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Password donot match.",
    label: "Confirm Password",
  },
];

function App() {
  const [values, setValues] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  };

  const onChange=(e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <>
      <div className="app">

        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
