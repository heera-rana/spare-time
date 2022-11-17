
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';



//this is our landing page
function App() {

  return (
    <div className="App">
        <Header />
          <div>
              <Outlet />
          </div>

        <Footer />
    </div>
  
    
  );
}

export default App;
