// import whiteMenu from "../images/whiteMenu.svg";
import { Link, useNavigate } from "react-router-dom";
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
            <Navigation token={token} signOut = {signOut}/>
          </div>
      </div>
      <SearchBar placeholder="Search for an event..." data={EventData}/> 
  </div>
)}

export default Header