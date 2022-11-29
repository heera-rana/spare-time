
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';



// App is our landing page
function App() {

  return (
    <div className="App">
        <Header />
          <div className="body">
              <Outlet />
          </div>
        <Footer />
    </div>  
  )
}

export default App;
