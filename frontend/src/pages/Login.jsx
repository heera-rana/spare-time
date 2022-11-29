
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

// Login is the login page
function Login (){
    const navigate = useNavigate()
    let myToken, isAdmin, userId
        
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    
    // onSubmit calls the loginUser function when input form is submitted
    const onSubmit = async e => {
        e.preventDefault();
        loginUser({
            email,
            password,
        })
    } 

    // loginUser makes the request to login with the input data
    async function loginUser(userData) {
        let content
        fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer`     
            },
        
            body: JSON.stringify(userData),
        })
        .then((response)=>{
            if (response.status === 200){     
                Swal.fire({
                    icon: 'success',
                    title: 'Yay',
                    text: 'you are successfully logged in',
                    iconColor: "#004643",
                })
                .then(()=>{
                    window.location.reload()
                })
                navigate("/")
                content = response.json()
                return content
            } else {
                var error = response.status
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'wrong username or password',
                    iconColor: "#e16162",
                })
            }
        })
        .then((data)=>{
            myToken = data["token"]
            isAdmin = data["isAdmin"]
            userId = data["_id"]
            sessionStorage.setItem('token', myToken)
            sessionStorage.setItem('admin', isAdmin)
            sessionStorage.setItem('userId', userId)
            return 
        })
        return 
    }

    return (
        <div className="login-container">
        <div className="form">
            <h2>Good to see you again!</h2>
            <form onSubmit={onSubmit} className= "form">
                <label>
                Email
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="Email Address"
                    />
                </label>
                <label>
                    Password
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    password='true'
                    placeholder="Password"
                    />
                </label>
                <div >
                    <input
                    className="button"
                        type="submit"
                        value="Login"
                    />
                </div>
            </form>
        </div>
        </div>
    )
}
  
export default Login