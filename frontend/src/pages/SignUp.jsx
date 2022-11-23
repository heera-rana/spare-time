
import React, {useState} from "react"

import Swal from "sweetalert2"


function SignUp (){
    
    const [user, setUser] = useState([])
    
    let myToken

    function updateUser(value){
        return setUser((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements

    const onSubmit = async e => {
        e.preventDefault();
        createUser(user)
    }

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
                    text: 'successfully resgistered',
                    iconColor: "#004643",
                })
                .then(()=>{
                    window.location.reload()
                    navigate("/")
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
            sessionStorage.setItem('token', myToken)
            return myToken     
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