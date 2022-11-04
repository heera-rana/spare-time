function Login (){

async function onSubmit (e) {
    e.preventDefault()
    console.log('user verification submitted')

    await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .catch(error => {
        window.alert(error);
        return
    })

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
                    required
                    />
                </div>
                <div className="form-group">
                    Password:
                    <input
                    type="password"
                    className="form-control"
                    id="password"
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