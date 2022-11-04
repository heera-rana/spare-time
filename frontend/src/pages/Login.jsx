import { useState } from "react";

async function loginUser(userData) {
    return fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(userData)
    })
      .then(users => users.json())
   }

function Login (){
     
         const [email, setEmail] = useState();
         const [password, setPassword] = useState();
       
         const onSubmit = async e => {
           e.preventDefault();
        await loginUser({
             email,
             password
           });

           console.log({email})
           

         }
       
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                Email:
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    Password:
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    password='true'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    )
}
  
export default Login