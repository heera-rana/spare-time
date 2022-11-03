import './CSS/AppMobile.css';
import './CSS/AppDesktop.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';


//this is our landing page
function App() {

  return (
    <div className="App">
        <Header />
          <div>
              
          </div>
        <footer />
        <Outlet />  
    </div>
  
    
  );
}

export default App;
