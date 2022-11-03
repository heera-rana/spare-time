import './CSS/AppMobile.css';
import './CSS/AppDesktop.css';
import { Outlet } from "react-router-dom";
import SearchBar from './components/SearchBar';
import EventData from './components/Data.json';
import Header from './components/Header.jsx';



//this is our landing page
function App() {

  return ( 
    <div className="App">
        <Header />
        <SearchBar placeholder ="Search for an event..."  data={EventData}/>
          <div>
              
          </div>
        <footer />
        <Outlet/>  
    </div>
    

        
    
  
    
  );
}

export default App;
