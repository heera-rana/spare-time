import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import OneEvent from "../components/OneEvent"
import addImage from "../components/util/addImage"

function EventDetails () {
    const [oneEvent, setOneEvent] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    useEffect(()=>{
        const getOneEvent = async () =>{
            const data = await fetch(`http://localhost:5000/api/events/oneEvent/${id}`)
            if (data) {
                const response = await data.json()
                addImage(response)
                setOneEvent(response);
              } else {
                console.log("No events found.");
              }
        }
        getOneEvent().catch(console.error)
    },[])
    
    return (
        <div>
            <OneEvent eventData={oneEvent} />
            <button onClick={() => navigate('/events')} >go back</button>
        </div>
    )
}
    
export default EventDetails;