// import whiteMenu from "../images/whiteMenu.svg";
import { Link } from "react-router-dom";

const Navigation = ({ token , signOut}) => {
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
              <Link to="/login">Login</Link> <br/>
            </li>
        )}
         {!isLoggedIn(token) && (
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
        )}
        {isLoggedIn(token) && (
          <li><Link to="/addEvent">Add Event</Link></li>
        )}
        {isLoggedIn(token) && (
            <button class='signOutButton' onClick={() => signOut()}>Sign Out</button>
        )}
      </ul>
    </nav>
  );
}

export default Navigation