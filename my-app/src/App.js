import './AppMobile.css';
import './AppDesktop.css';
//import data from "./events.json"
import { Outlet, Link } from "react-router-dom";
import whiteMenu from "./images/whiteMenu.svg";


//this is our landing page
function App() {

  //const eventName = data.eventName

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
    <div>
        <div className="Container">
          <div className="headerContainer">   
          </div>
          <main>
            <div>
              <h1>Welcome</h1>
            </div>
            <div className="eventImages">
              <div>
                <div><img src= "eventImages/Class.jpg" alt= "Class"></img></div>
                <div><img src= "eventImages/Fitness.jpg" alt= "Fitness"></img></div>
                <div><img src= "eventImages/Random.jpg" alt= "Misc"></img></div>
                <div><img src= "eventImages/Night out.jpg" alt= "Evening"></img></div>
               <div><img src= "eventImages/Child friendly.jpg" alt= "Child friendly"></img></div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Outlet/>
      </div>
  );
}

export default App;
