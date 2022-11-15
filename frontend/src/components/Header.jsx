import whiteMenu from "../images/whiteMenu.svg";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import EventData from './Data.json'
import {useState, useEffect} from "react"
import Navigation from "./Navigation"
import Swal from "sweetalert2"

function Header() {
  const [token, setToken] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = (sessionStorage.getItem('token'))
    //console.log(token)
    if (token) {
    setToken(token);
    }
  }, [])

  const signOut = ()=>{
    sessionStorage.removeItem('token')
    // const token = (sessionStorage.getItem('token'))
    // console.log(token)
    Swal.fire({
      icon: 'success',
      title: 'Logged out',
      text: 'you are successfully logged out',
    }) 
    .then(()=>{
      window.location.reload()
    })
    navigate("/")
  }

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
                <Navigation token={token} signOut = {signOut}/>
            </header>
          )}

export default Header