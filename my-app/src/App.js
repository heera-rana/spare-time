import './AppMobile.css';
import './AppDesktop.css';
import data from "./events.json"
import { Outlet, Link } from "react-router-dom";
import whiteMenu from "./images/whiteMenu.svg";

//this is our landing page
function App() {

  const eventName = data.eventName

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div>
            <div className= "h1">
            <h1>Spare Time</h1>
          </div>
          </div>
          <div className= "searchBar">
            <input className="SearchBar" type="text" placeholder="search" id="eventName" />
            <button>Click me</button>
            </div>
          <div className="burgerMenuContainer">
            <img
              src={whiteMenu}
              alt="Menu"
              width="30px"
              id="burgerMenu"
            />
          </div>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/addEvent">Add Event</Link></li>
              <li><Link to="/signUp">Sign Up</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </nav>
        </header>
      <Outlet/>
      </div>
    </div>
  
    
  );
}

export default App;
