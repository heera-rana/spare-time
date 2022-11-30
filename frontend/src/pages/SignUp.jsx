
import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

// SignUp is the sign up page
function SignUp (){  
    const [user, setUser] = useState([])
    const navigate = useNavigate()

    let myToken, isAdmin, userId, name

    // updateUser changes the initial user data when the form is submitted
    function updateUser(value){
        return setUser((prev) => {
            return {...prev, ...value}
        })
    } 

    // onSubmit calls the createdUser funtion when the form is submitted
    const onSubmit = async e => {
        e.preventDefault();
        createUser(user)
    }

    // createUser makes the POST request with the input data 
    async function createUser(user){
        let content
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
                Swal.fire({
                    icon: 'success',
                    title: 'Yay',
                    text: 'successfully registered',
                    iconColor: "#004643",
                })
                .then(()=>{
                    console.log("here")
                    navigate("/")
                    window.location.reload()
                    content = response.json()
                    return content
                })   
                console.log('User has been sucessfully registered')
                content = response.json()
                return content
            } else {
                var error = response.status
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'something went wrong',
                    iconColor: "#e16162",
                })
            }
        })
        .then((data)=>{
            myToken = data["token"]
            isAdmin = data["isAdmin"]
            userId = data["_id"]
            name = data["name"]
            sessionStorage.setItem('token', myToken)
            sessionStorage.setItem('admin', isAdmin)
            sessionStorage.setItem('userId', userId)
            sessionStorage.setItem('name', name)   
        })
    }

    return (
        <div className="form-container">
            <div className= "form">
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <label>
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
                    placeholder="Full Name"
                    />
                </label>
                <label>
                Email:
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email || ""}
                    onChange={(e)=>updateUser({email: e.target.value})}
                    required
                    placeholder="Email Address"
                    />
                </label>
                <label>
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
                    placeholder="Password"
                    />
                </label>
                <label>
                <div className="mustHave">
                    <u><div className="passwordRequired">Password must contain:</div></u>
                        <div className="passwordListItem">A uppercase letter</div>
                        <div className="passwordListItem">A lowercase letter</div>
                        <div className="passwordListItem">A Number</div>
                        <div className="passwordListItem">A minimum 5 characters</div>
                    </div>
                </label>
                <label>
                <div>
                    <input
                    className="button"
                        type="submit"
                        value="Sign Up"
                    />
                    
                </div>
                </label>
            </form>
                </div>
        </div>
    )
}
  
export default SignUp