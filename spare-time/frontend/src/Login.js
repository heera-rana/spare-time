import React, {useState} from 'react';
import './App.css';

function Login () {
    const [data, setData] = useState({
        username: "", 
        password: "",
      });
    
      const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
    
      const username = data.username;
      const password = data.password;
    
      const handleChange= (event) => {
        if (event.target.name ==="username") {
          setData({
            username: event.target.value, 
            password: data.password
          })
      } else if (event.target.name === "password")
      {
      setData ({
        username: data.username,
        password: event.target.value, 
      });
     }
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(data);
      // we want to perform the POST here 
      let responseCode;
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((response) => {
        console.log("response", response);
        responseCode = response.status;
        if (responseCode === 200) {
          setUserIsAuthenticated(true)
        } else {
          setUserIsAuthenticated(false)
        }
      });
    };
      return ( 
        <div>
      <h2>Login</h2>
    {userIsAuthenticated && <h1>You are logged in</h1>}
    {!userIsAuthenticated && (
    <form onSubmit={handleSubmit}>
    
      <input 
      type="text" 
      name="username" 
      value={username} 
      onChange={handleChange}/>
    
      <input 
      type="text" 
      name="password" 
      value={password} 
      onChange={handleChange}/>
    
      <input 
      type="submit" 
      name="submit" />
    
      <p>{data.username}</p>
      <p>{data.password}</p>
    </form>  
    )}
        </div>
      );
      };

    
    export default Login;