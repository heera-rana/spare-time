// import whiteMenu from "../images/whiteMenu.svg";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import EventData from './Data.json'
import {useState, useEffect} from "react"
import Navigation from "./Navigation"
import Swal from "sweetalert2"

// Header is rendered at the top of every page
function Header() {
  const [token, setToken] = useState([])
  const [name, setName] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = (sessionStorage.getItem('token'))
    if (token) {
    setToken(token);
    }
  }, [])

  useEffect(() => {
    const name = (sessionStorage.getItem('name'))
    if (name) {
    setName(name);
    }
  },[])

  // signOut signs the user out by removing the session
  const signOut = ()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('admin')
    sessionStorage.removeItem('userId')
    
    console.log("successfully signed out")
    Swal.fire({
      icon: 'success',
      title: 'Logged out',
      text: 'you are successfully logged out',
      iconColor: "#004643",
    }) 
    .then(()=>{
      window.location.reload()
    })
    navigate("/")
  }

  return (
    <div>
      <div className="App-header">
        <h1 className="h1"><Link to="/">Spare Time</Link></h1>
          <div className="nav">
            <Navigation token={token} signOut={signOut} name={name}/>
          </div>
      </div>
    
      <div className="searchBar">
      <SearchBar placeholder="Search for an event..." data={EventData} /> 
      </div>
  </div>
)}

export default Header