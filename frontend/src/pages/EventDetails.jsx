import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import OneEvent from "../components/OneEvent"
import addImage from "../components/util/addImage"

function EventDetails () {
    const [oneEvent, setOneEvent] = useState([])
    const [token, setToken] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        const token = (sessionStorage.getItem('token'))
        console.log(token)
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
                addImage(response)
                setOneEvent(response);
              } else {
                console.log("No events found.");
              }
        }
        getOneEvent().catch(console.error)
    },[])

    const deleteEvent = async () =>{
        //console.log(oneEvent)
        const response = await fetch(`http://localhost:5000/api/events/oneEvent/${id}`,{
            method: "DELETE"
        })
    }
    
    return (
        <div>
            <OneEvent eventData={oneEvent} />
            <button onClick={() => navigate('/events')} >go back</button>
            {isLoggedIn(token) && 
                <button onClick={()=>deleteEvent()}>delete</button>
           }
        </div>
    )
}
    
export default EventDetails;