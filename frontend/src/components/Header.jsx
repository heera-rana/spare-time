import whiteMenu from "../images/whiteMenu.svg";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import EventData from './Data.json'
import {useState, useEffect} from "react"

const Navigation = ({ token, onLogout }) => {
  console.log(token)
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/addEvent">Add Event</Link></li>
        <li><Link to="/signUp">Sign Up</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>

      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

function Header() {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const token = (localStorage.getItem('token'));
    if (token) {
    setToken(token);
    }
  }, [])

  return (
          <header className="App-header">
                <div>
                  <div className= "h1">
                  <h1>Spare Time</h1>
                  </div>
                </div>   
                <SearchBar placeholder="Search for an event..." data={EventData}/>       
                <div className="burgerMenuContainer">
                  <img src={whiteMenu} alt="Menu" width="30px" id="burgerMenu"/>  
                </div>
                <Navigation token={token}/>
            </header>
          )}

export default Header