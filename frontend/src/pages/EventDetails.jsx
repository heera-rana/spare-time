import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EventForm from "../components/EventForm"
import OneEvent from "../components/OneEvent"
import Swal from "sweetalert2"

function EventDetails () {
    const [oneEvent, setOneEvent] = useState([])
    const [token, setToken] = useState([])
    const [setIsPending] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const buttonLabel = ["Update event", "Updating event"]


    useEffect(() => {
        const token = (sessionStorage.getItem('token'))
        if (token) {
            setToken(token);
        }
    }, [])

    const isLoggedIn=((check)=>{
        if (check.length === 0){
          return false
        } else {
          return true
        }
    })

    function updateEvent(value){
        return setOneEvent((prev) => {
            return {...prev, ...value}
        })
    } 

    useEffect(()=>{
        const getOneEvent = async () =>{
            const data = await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
                method: "GET"
            })
            if (data) {
                const response = await data.json()
                response.image = `eventImages/${response.categories}.jpg`
                setOneEvent(response);
              } else {
                console.log("No events found.");
              }
        }
        getOneEvent().catch(console.error)
    },)

    const askDelete=()=>{
        Swal.fire({
            icon: 'warning',
            title: 'are you sure?',
            text: 'event will be permanently deleted',
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
    
    const deleteEvent = async () =>{
        await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
            method: "DELETE",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        .then((response)=>{
            console.log(response)
            if (response.status === 201){
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'event has been deleted',
                    iconColor: "#004643",
                  })
            } else {
                var error = (response.status === 401)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'you must login to delete an event',
                    iconColor: "#e16162",
                  })
                  navigate("/login")
                  console.log('error occured:',error, '. user must be logged in to delete an event')
            }
        })
    }

    
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
            console.log(response)
            if (response.status === 201){
                setIsPending(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Yay',
                    text: 'event updated',
                    iconColor: "#004643",
                  })
                .then(()=>{
                    window.location.reload()
                })
                
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
        setOneEvent([])
    }
    function hideEditEventForm() {
        var hideEditEventForm = document.getElementById("EditEventForm");
        if (hideEditEventForm.style.display === "none") {
            hideEditEventForm.style.display = "block";
        } else {
            hideEditEventForm.style.display = "none";
        }
      }

    return (
        <div className="oneEvent">
            <OneEvent eventData={oneEvent} />
            <button className="button" onClick={() => navigate('/')} >Back</button>
            {isLoggedIn(token) && 
                <div>
                    <button className="button" onClick={()=>askDelete()}>Delete</button>
                    <button onClick={hideEditEventForm} className="button">Edit</button>
                    <div id="EditEventForm" style={{display: "none"}}>
                        <EventForm event={oneEvent} onSubmit={onSubmit} setIsPending={setIsPending} updateEvent={updateEvent} buttonLabel={buttonLabel} title={"Edit event"}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default EventDetails;