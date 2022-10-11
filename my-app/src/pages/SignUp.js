
import React, {useState} from "react"
import { useNavigate } from "react-router"

// const dbo = require("./db/connection");
// var ObjectId = dbo.getObjectId();
/*
const db=client.db('school')
const coursers = db.collection('courses')
courses.insertOne({name: "Web security"},{err,result)=>{}})
*/

function SignUp (){
    
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate

    function updateUser(value){
        return setUser((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements


    async function onSubmit(e){
        e.preventDefault()

        const newUser ={ ...user}

        await fetch("http://localhost:5000/register", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser),
        })
        .catch(error => {
            window.alert(error);
            return
        })

        setUser({ username: "", password: ""})
        navigate("/")
        // db.users.insert(setUser) 
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    Username:
                    <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={user.username}
                    onChange={(e)=>updateUser({username: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    Password:
                    <input
                    type="text"
                    className="form-control"
                    id="password"
                    value={user.password}
                    onChange={(e)=>updateUser({password: e.target.value})}
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
  
export default SignUp