import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){
    const [user, setUser] = useState([]);
    const navigate = useNavigate()
    
    function updateUser(value){
        return setUser((prev) => {
            return {...prev, ...value}
        })
    }
    
    async function onSubmit(e){
        e.preventDefault()

        const newUser = {...user}
    
        await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser),
        })
        .then((response)=>{
            if (response.status === 200){
                // response.json()
                alert("Successfully logged in")
                navigate("/")
            } else {
                var error = response.status
                console.log(error)
                alert("Wrong username or password")
            }
        })
        setUser([])
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
                    onChange={(e) => updateUser({email: e.target.value})}
                    required
                    />
                </div>
                <div className="form-group">
                    Password:
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => updateUser({password: e.target.value})}
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