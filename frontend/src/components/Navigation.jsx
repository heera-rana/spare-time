// import whiteMenu from "../images/whiteMenu.svg";
import { Link } from "react-router-dom";

const Navigation = ({ token , signOut}) => {
  //console.log(token)
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
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn(token) && (
            <li>
              <Link to="/login">Login</Link>
              <Link to="/signUp">Sign Up</Link>
            </li>
        )}
        {isLoggedIn(token) && (
          <li><Link to="/addEvent">Add Event</Link></li>
        )}
        <li>
          <Link to="/events">Events</Link>
        </li>
        {isLoggedIn(token) && (
            <button onClick={() => signOut()}>Sign Out</button>
        )}
      </ul>
    </nav>
  );
}

export default Navigation