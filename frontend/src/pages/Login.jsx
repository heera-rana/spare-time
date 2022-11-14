
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import './Login.css';

function Login (){

const navigate = useNavigate()

async function loginUser(userData) {
    return fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer"      
        },
        
        body: JSON.stringify(userData),
    })
    .then((response)=>{
        if (response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'Yay',
                text: 'you are successfully logged in',
              }) 
            navigate("/")
        } else {
            var error = response.status
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'wrong username or password',
              })
        }
    })
}
         const [email, setEmail] = useState({});
         const [password, setPassword] = useState({});
    
         const onSubmit = async e => {
           e.preventDefault();
        loginUser({
             email,
             password,
           }); 
         } 
    return (
        <div className= "loginForm">
            <h1>Good to see you again</h1>
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