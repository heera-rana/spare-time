
import React, {useState} from "react"

function Login (){
    
    const [user, setUser] = useState([])
    

    function updateUser(value){
        return setUser((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements


    async function onSubmit(e){
        e.preventDefault()

        const loginUser ={ ...user}

        await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser),
        })
        .catch(error => {
            window.alert(error);
            return
        })
        setUser({ email:" ", password: " "})
      
    }

    return (
        <div>
            <h1>Login to add a new event</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                Email:
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
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
                    value={user.password}
                    onChange={(e)=>updateUser({password: e.target.value})}
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