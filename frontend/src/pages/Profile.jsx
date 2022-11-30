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

    // checking that the userId and the event creator id are a match

    let myData=[]

    useEffect(()=>{
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
       // console.log(myData)
       // console.log(creator)
        console.log(myEvents)
    },[allEvents])

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
            <h1>
                Hello {name}
            </h1>
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