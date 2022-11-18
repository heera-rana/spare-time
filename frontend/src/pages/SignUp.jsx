
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import '../CSS/form.css'

function SignUp (){
    
    const [user, setUser] = useState([])
    const navigate = useNavigate

    function updateUser(value){
        return setUser((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements


    async function onSubmit(e){
        e.preventDefault()

        const newUser ={ ...user}

        await fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser),
        })
        .then((response)=>{
            if (response.status === 201){
                console.log(response.body)
                Swal.fire({
                    icon: 'success',
                    title: 'Yay',
                    text: 'successfully resgistered',
                  })
                navigate("/")
                console.log('User has been sucessfully registered')
            } else {
                var error = response.status
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'something went wrong',
                  })
            }
        })
        setUser({ name: "", email:"", password: ""})
      
    }

    return (
        <div>
            <div className= "form">
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                Name:
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    pattern="^[\w'\-,.][^0-9_!,.§±¡?÷?¿/\\+=@#$£€›%&^*(){}|~<>;:[\]]{2,49}$"
                    alert='please do not include any special characters'
                    value={user.name || ""}
                    onChange={(e)=>updateUser({name: e.target.value})}
                    required
                    />
                </div>
                <div className="form-group">
                Email:
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email || ""}
                    onChange={(e)=>updateUser({email: e.target.value})}
                    required
                    />
                </div>
                <div className="form-group">
                    Password:
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={user.password || ""}
                    onChange={(e)=>updateUser({password: e.target.value})}
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
                    alert='Please follow the password guidence below'
                    password='true'
                    />
                    <div className="mustHave">
                    <ul>
                    <li>Password Must contain:</li>
                        <li>At least 1 Uppercase</li>
                        <li>At least 1 Lowercase</li>
                        <li>At least 1 Number</li>
                        <li>Min 5 chars</li>
                    </ul>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit"
                    />
                    
                </div>
            </form>
                </div>
        </div>
    )
}
  
export default SignUp