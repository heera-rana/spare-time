
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

function Login (){

    const navigate = useNavigate()
    let myToken

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
                //console.log(response)
                Swal.fire({
                    icon: 'success',
                    title: 'Yay',
                    text: 'you are successfully logged in',
                })
                .then(()=>{
                    window.location.reload()
                })
                console.log("here")
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
                })
            }
        })
        .then((data)=>{
            //console.log(data)
            myToken = data["token"]
            //console.log(myToken)
            sessionStorage.setItem('token', myToken)
            return myToken   
        })
        return 
    }
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    
    const onSubmit = async e => {
        e.preventDefault();
        loginUser({
            email,
            password,
        })
    } 

    return (
        <div className= "form">
            <h2>Good to see you again!</h2>
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
                    <input className="button"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    )
}
  
export default Login