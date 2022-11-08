import { useState } from "react";

function Login (){

async function loginUser(userData) {
    return fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json"
           
        },
        body: JSON.stringify(userData),
    })
    .then((response)=>{
        if (response.status === 200){
            response.json()
            alert("Successfully logged in")
        } else {
            var error = response.status
            console.log(error)
            alert("Wrong username or password")
        }
    })

    //.then(users => users.json())
    }
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    
    const onSubmit = async e => {
        e.preventDefault();
    loginUser({
        email,
         password,
       }); fetch(loginUser).then((res) => {
        console.log(res.status); //for some reason it only returns 200 even if login fails
          
      });
           //if there is a reponse status of 200 then successful login, reset the form and nav to home page, console.log the recieved token
           //else if user login failed invalid credentials and display the invalid credatial in the console
           //save the JWT in local storage 
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