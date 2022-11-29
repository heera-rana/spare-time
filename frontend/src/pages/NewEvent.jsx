import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import EventForm from "../components/EventForm"

// NewEvent is the page for adding a new event 
function NewEvent (){  
    const [event, setEvent] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [token, setToken] = useState([])
    const [userId, setUserId] = useState([])
    const navigate = useNavigate()
    const buttonLabel = ["Add", "Adding"]

    // updateEvent changes the initial event data when the form is submitted
    function updateEvent(value){
        return setEvent((prev) => {
            return {...prev, ...value}
        })
    } 

    // getting the token from sessionStorage
    useEffect(() => {
      const token = (sessionStorage.getItem('token'))
      if (token) {
        setToken(token)
      }
    }, [])

    // getting the user id from sessionStorage
    useEffect(() => {
        const userId = (sessionStorage.getItem('userId'))
        if (userId) {
          setUserId(userId)
        }
    })

    // onSubmit makes the POST request when the form is submitted
    async function onSubmit(e){
        e.preventDefault()
        const newEvent ={ ...event}
        newEvent["creator"]=userId

        setIsPending(true)

        await fetch("http://localhost:5000/api/events/newEvent", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newEvent),
        })
        .then((response)=>{
            if (response.status === 201){
                setIsPending(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Yay',
                    text: 'new event added',
                    iconColor: "#004643",
                  })
                navigate("/")
                console.log("Event Successfully added")
            } else {
                var error = (response.status === 401)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'you must login to add an event',
                    iconColor: "#e16162",
                  })
                  navigate("/login")
                  console.log('error occured:',error, '. user must be logged in to add an event')
            }
        })
        setEvent([])
    }

    return (
        <EventForm event = {event} isPending={isPending} onSubmit={onSubmit} updateEvent={updateEvent} buttonLabel = {buttonLabel} title={"Add new Event"}/>           
    )
}
  
export default NewEvent