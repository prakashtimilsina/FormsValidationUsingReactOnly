
import { useState, useRef } from 'react';
import './App.css'
import FormInput from './components/FormInput';

function App() {
//  const [username, setUsername] = useState("");

 // useRef hook if to prevent the rendered when state changes imediately
const usernameRef = useRef();

 console.log(usernameRef);
 console.log("re-rendered");

 const handleSubmit =(e)=>{
  e.preventDefault();
  // console.log(usernameRef);
  const data = new FormData(e.target)
  // console.log(data)
  console.log(Object.fromEntries(data.entries()))
 }

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          {/* <FormInput placeholder="Username" setUsername={setUsername} />  used for useState */}
          {/* <FormInput placeholder="Username" refer={usernameRef} /> */}
          <FormInput placeholder="Username" name="username" />
          <FormInput placeholder="Email" name="email" />
          <FormInput placeholder="Full Name" name="fullname" />
          <FormInput placeholder="Something else" name="sth" />
          <button>Submit</button>
        </form>
      </div>
        
    </>
  )
}

export default App
