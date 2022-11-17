import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EventForm from "../components/EventForm"
import OneEvent from "../components/OneEvent"

function EventDetails () {
    const [oneEvent, setOneEvent] = useState([])
    const [token, setToken] = useState([])
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const buttonLabel = ["Update event", "Updating event"]


    function updateEvent(value){
        return setOneEvent((prev) => {
            return {...prev, ...value}
        })
    } 

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
    },[])

    const deleteEvent = async () =>{
        const response = await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
            method: "DELETE",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
    }

    
    const onSubmit = async () =>{
        setIsPending(true)

        const data = await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        if (data) {
            const response = await data.json()
           // response.image = `eventImages/${response.categories}.jpg`
            //setOneEvent(response);
            setIsPending(false)
        } else {
            console.log("No events found.");
        }
        onSubmit().catch(console.error)
        setOneEvent([]);
    }

    return (
        <div>
            <OneEvent eventData={oneEvent} />
            <button onClick={() => navigate('/')} >go back</button>
            {isLoggedIn(token) && 
                <div>
                    <button onClick={()=>deleteEvent()}>delete</button>
                    {/* <button onClick={()=>()}>edit</button> */}
                    <EventForm event={oneEvent} onSubmit={onSubmit} setIsPending={setIsPending} updateEvent={updateEvent} buttonLabel={buttonLabel} title={"Edit event"}/>
                </div>
            }
        </div>
    )
}

export default EventDetails;