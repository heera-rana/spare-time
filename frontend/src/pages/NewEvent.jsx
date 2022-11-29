import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import EventForm from "../components/EventForm"

function NewEvent (){  
    const [event, setEvent] = useState([])
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()
    const buttonLabel = ["Add", "Adding"]

    function updateEvent(value){
        return setEvent((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements
    const [token, setToken] = useState([])
    const [userId, setUserId] = useState([])

    useEffect(() => {
      const token = (sessionStorage.getItem('token'));
      if (token) {
        setToken(token);
      }
    }, [])

    useEffect(() => {
        const userId = (sessionStorage.getItem('userId'))
        if (userId) {
          setUserId(userId);
        }
    });

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
        console.log(newEvent)
    }

    return (
        <EventForm event = {event} isPending={isPending} onSubmit={onSubmit} updateEvent={updateEvent} buttonLabel = {buttonLabel} title={"Add new Event"}/>           
    )
}
  
export default NewEvent