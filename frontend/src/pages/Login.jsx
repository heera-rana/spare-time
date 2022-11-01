import React, { useState } from "react";

export default function Login() {
  // initial state
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  let [setLogin] = useState(false);

  console.log({setLogin})

  async function onSubmit(e){
    e.preventDefault()

    await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .catch(error => {
        window.alert(error);
        return
    })

    setLogin = 'true'
    console.log({email, setLogin})
}

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        
        <div className="form-group">
          Email address:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button
          variant="primary"
          type="submit"
          onClick={(e) => onSubmit(e)}
        >
          Login
        </button>
      </form>
    </>
  );
}