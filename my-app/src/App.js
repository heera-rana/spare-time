import './AppMobile.css';
import './AppDesktop.css';
import data from "./events.json"
import { Outlet, Link } from "react-router-dom";
import whiteMenu from "./images/whiteMenu.svg";

//this is our landing page
function App() {

  const eventName = data.eventName

  return (
    <body>
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Spare Time</h1>
          </div>
          <div class="burgerMenuContainer">
            <img
              src={whiteMenu}
              alt="Menu"
              width="30px"
              id="burgerMenu"
            />
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/addEvent">Add Event</Link></li>
              <li><Link to="/signUp">Sign Up</Link></li>
            </ul>
            <input class="SearchBar" type="text" placeholder="search" id="eventName" />
          </nav>
        </header>
      <Outlet/>
      </div>
    </body>
  );
}

export default App;
