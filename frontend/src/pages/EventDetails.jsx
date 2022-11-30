import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EventForm from "../components/EventForm"
import OneEvent from "../components/OneEvent"
import Swal from "sweetalert2"

function EventDetails () {
    const [oneEvent, setOneEvent] = useState([])
    const [token, setToken] = useState([])
    const [admin, setAdmin] = useState([])
    const [userId, setUserId] = useState([])
    const [isPending, setIsPending] = useState(false)
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

    useEffect(()=>{
        const admin = (sessionStorage.getItem('admin'))
        if (admin) {
            setAdmin(JSON.parse(admin))
        } 
    })

    useEffect(() => {
        const userId = (sessionStorage.getItem('userId'))
        if (userId) {
          setUserId(userId);
        }
    })

    const isCreator=((check)=>{
        if (userId === check["creator"]){
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
                setOneEvent(response)
              } else {
                console.log("No events found.");
              }
        }
        getOneEvent().catch(console.error)
    },[])

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
                    text: 'You must login to delete an event',
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
            {(admin || isCreator(oneEvent))  &&
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