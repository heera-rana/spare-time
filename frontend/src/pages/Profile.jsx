import { useState, useEffect } from "react"
import EventsList from "../components/EventsList"
import addImageAndDateFormat from "../components/util/addImageAndDateFormat"

function Profile(){
    const [name, setName] = useState([])
    const [allEvents, setAllEvents] = useState([])
    const [myEvents, setMyEvents] = useState([])
    const [userId, setUserId] = useState([])
    const [admin, setAdmin] = useState([])
    const [creator, setCreator] = useState([])

    // getting the user's name from sessionStorage
    useEffect(() => {
        const name = (sessionStorage.getItem('name'))
        if (name) {
        setName(name);
        }
      },[])

    // getting the userId from sessionStorage
    useEffect(() => {
        const userId = (sessionStorage.getItem('userId'))
        if (userId) {
          setUserId(userId);
        }
    },[])   

    // getting the admin access from sessionStorage
    useEffect(()=>{
        const admin = (sessionStorage.getItem('admin'))
        if (admin) {
            setAdmin(JSON.parse(admin))
        } else {
            setAdmin(false)
        }
    },[])

    // getMyEvents filters the events to display only the ones created by the user
    useEffect(()=>{
        let myData=[]
        function getMyEvents (){
            allEvents.forEach((value,id)=>{
                if (userId===value["creator"]){
                    setCreator(true)
                    myData.push(value)
                    setMyEvents(myData)
                }
            })
            return 
        }
        getMyEvents()
    },[userId, allEvents])

    // getEvents makes a get request for all the event data
    useEffect(() => {
        const getEvents = async () => {
            const data = await fetch("http://localhost:5000/api/events/allevents")
            if (data) {
                console.log("all events data was fetched")
                const response = await data.json()
                addImageAndDateFormat(response)
                setAllEvents(response)
            } else {
                console.log("No events found.")
            }
        }
        getEvents().catch(console.error)
    }, [])


    return(
        <div>
            <h2>
                Hello {name}
            </h2>
            
            {admin &&
                <EventsList events={allEvents} />
            }
            {creator &&
                <EventsList events={myEvents} />
            }
        </div>
    )
}

export default Profile