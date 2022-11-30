import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EventForm from "../components/EventForm"
import OneEvent from "../components/OneEvent"
import Swal from "sweetalert2"

// EventDetails is the page for a single event. It Gets, Updates and Deletes
function EventDetails () {
    const [oneEvent, setOneEvent] = useState([])
    const [token, setToken] = useState([])
    const [admin, setAdmin] = useState([])
    const [userId, setUserId] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [isCreator, setIsCreator] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const buttonLabel = ["Update event", "Updating event"]

    // getting the token from sessionStorage
    useEffect(() => {
        const token = (sessionStorage.getItem('token'))
        if (token) {
            setToken(token);
        }
    }, [])

    // getting the admin access from sessionStorage
    useEffect(()=>{
        const admin = (sessionStorage.getItem('admin'))
        if (admin) {
            setAdmin(JSON.parse(admin))
        } else {
            setAdmin(false)
        }
    },[])

    // getting the userId from sessionStorage
    useEffect(() => {
        const userId = (sessionStorage.getItem('userId'))
        if (userId) {
          setUserId(userId);
        }
    },[])

    // checking that the userId and the event creator id are a match
    useEffect(()=>{
        if (userId === oneEvent["creator"]){
            setIsCreator(true)
        } else {
            setIsCreator(false)
        }
    },[userId, oneEvent])

    // updateEvent is the hook that changes the event data after updating it
    function updateEvent(value){
        return setOneEvent((prev) => {
            return {...prev, ...value}
        })
    } 

    // getOneEvent gets the data for the event which id is passes as a parameter
    useEffect(()=>{
        const getOneEvent = async () =>{
            const data = await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
                method: "GET"
            })
            if (data) {
                console.log("event fetched")
                const response = await data.json()
                response.image = `eventImages/${response.categories}.jpg`
                setOneEvent(response)
              } else {
                console.log("No events found.");
              }
        }
        getOneEvent().catch(console.error)
    },[id])

    // askDelete is the popup that calls/uncalls the delete function
    const askDelete=()=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Event will be permanently deleted',
            showCancelButton: true,
            iconColor: "#f9bc60",
            confirmButtonText: 'Yes, delete it!',
          })
        .then((result) => {
            if (result.isConfirmed) {
                deleteEvent()
                navigate("/")
            }
        }) 
    }
    
    // deleteEvent deletes an event with id passed in the parameter
    const deleteEvent = async () =>{
        await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
            method: "DELETE",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(oneEvent)
        })
        .then((response)=>{
            if (response.status === 201){
                console.log("event deleted")
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Event has been deleted',
                    iconColor: "#004643",
                  })
                  .then(()=>{
                    window.location.reload()
                })
            } else if (response.status === 401){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You must login to delete an event',
                    iconColor: "#e16162",
                  })
                  navigate("/login")
                  console.log('User must be logged in to delete an event')
            } else if (response.status === 403){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You must be an admin to delete this event',
                    iconColor: "#e16162",
                  })
            }
        })
    }

    
    // onSubmit makes a request to update an event
    const onSubmit = async (e) =>{
        e.preventDefault()

        setIsPending(true)

        const updatedEvent={...oneEvent}

        await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updatedEvent)
        })
        .then((response)=>{
            if (response.status === 201){
                console.log("event updated")
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Event has been updated',
                    iconColor: "#004643",
                  })
                  .then(()=>{
                    window.location.reload()
                })
            } else if (response.status === 401){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You must login to update an event',
                    iconColor: "#e16162",
                  })
                  navigate("/login")
                  console.log('User must be logged in to update an event')
            } else if (response.status === 403){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You must be an admin to update this event',
                    iconColor: "#e16162",
                  })
            }
        })
       // setOneEvent([])
    }

    // hideEditEventForm displays the edit form when clicking the edit button
    function hideEditEventForm() {
        var hideEditEventForm = document.getElementById("EditEventForm")
        if (hideEditEventForm.style.display === "none") {
            hideEditEventForm.style.display = "block"
        } else {
            hideEditEventForm.style.display = "none"
        }
      }


    return (
        <div className="oneEvent">
            <OneEvent eventData={oneEvent} />
            <button className="button" onClick={() => navigate('/')} >Back</button>
            {(admin || isCreator) &&
                <div>
                    <button className="button" onClick={()=>askDelete()}>Delete</button>
                    <button onClick={hideEditEventForm} className="button">Edit</button>
                    <div id="EditEventForm" style={{display: "none"}}>
                        <EventForm event={oneEvent} onSubmit={onSubmit} isPending={isPending} updateEvent={updateEvent} buttonLabel={buttonLabel} title={"Edit event"}/>        
                    </div>
                </div>
            }
        </div>
    )
}

export default EventDetails;