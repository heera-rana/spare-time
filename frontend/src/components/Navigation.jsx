import { Link } from "react-router-dom";

// Navigation is the nav bar
const Navigation = ({ token , signOut, name}) => {

  const isLoggedIn=((check)=>{
    if (check.length === 0){
      return false
    } else {
      return true
    }
  })

  return (
      <nav>
        <ul>
          {!isLoggedIn(token) && (
              <li>
                <Link to="/login">Login</Link> <br/>
              </li>
          )}
          {!isLoggedIn(token) && (
              <li>
                <Link to="/signUp">Sign Up</Link>
              </li>
          )}
          {isLoggedIn(token) && (
            <li>
              <Link to="/myProfile">Hello {name}</Link>
            </li>
          )}
          {isLoggedIn(token) && (
            <li><Link to="/addEvent">Add Event</Link></li>
          )}
          {isLoggedIn(token) && (
            <li>
              <button className='signOutButton' onClick={() => signOut()}>Sign Out</button>
            </li>
          )}
        </ul>
      </nav>
  );
}

export default Navigation