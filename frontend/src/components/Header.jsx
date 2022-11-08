import whiteMenu from "../images/whiteMenu.svg";
import { Link } from "react-router-dom";


function Header() {
  return (
          <header className="App-header">
                <div>
                  <div className= "h1">
                  <h1>Spare Time</h1>
                  </div>
                </div>          
                <div className="burgerMenuContainer">
                  <img src={whiteMenu} alt="Menu" width="30px" id="burgerMenu"/>  
                </div>
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/addEvent">Add Event</Link></li>
                    <li><Link to="/signUp">Sign Up</Link></li>
                    <li><Link to="/events">Events</Link></li>
                  </ul>
                </nav>
            </header>
          )}
export default Header