import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import "./NewEvent.css"

function NewEvent (){  
    const [event, setEvent] = useState([])
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()


    function updateEvent(value){
        return setEvent((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements
    const [token, setToken] = useState([]);

    useEffect(() => {
      const token = (sessionStorage.getItem('token'));
      if (token) {
        setToken(token);
      }
    }, []);
    async function onSubmit(e){
        e.preventDefault()


        const newEvent ={ ...event}

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
                  })
                navigate("/")
            } else {
                var error = (response.status === 401)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'you must login to add an event',
                  })
                  navigate("/login")
                  console.log('error occured:',error, '. user must be logged in to add an event')
            }
        })
        setEvent([])
    }

    return (
        <div>
            <div className= "newEvent">
            <h2>Add new event</h2>
            <form onSubmit={onSubmit}>
                <label className="form-group"> Event Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={event.title || ""}
                        onChange={(e)=>updateEvent({title: e.target.value})}
                        required
                    />
                
                <label className="form-group"> Category: </label>
                    <select 

                        value={event.categories} 
                        className="form-control" 
                        onChange={(e)=>updateEvent({categories: e.target.value})}
                        required
                        defaultValue={'DEFAULT'} 
                    >
                        <option value="DEFAULT" disabled>--- Select category ---</option>
                        <option value= "Childrens Events">Childrens Events</option>
                        <option value="Classes and Workshops">Classes and Workshops</option>
                        <option value="Evening Events">Evening Events</option>
                        <option value="Misc">Misc</option>
                        <option value="Music Events">Music Events</option>
                        <option value="Sports and Fitness">Sports and Fitness</option>
                    </select>

                <label className="form-group"> Provider: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="provider"
                        value={event.provider || ""}
                        onChange={(e)=>updateEvent({provider: e.target.value})}
                        required
                    />
               
                <label className="form-group"> Date: </label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="date"
                        value={event.time}
                        onChange={(e)=>updateEvent({date: e.target.value})}
                        required
                    />

                <label className="form-group"> Availability: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="availability"
                        value={event.availability || ""}
                        onChange={(e)=>updateEvent({availability: e.target.value})}
                        required
                    />

                <label className="form-group"> Duration: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        value={event.duration || ""}
                        onChange={(e)=>updateEvent({duration: e.target.value})}
                        required
                        placeholder="minutes"
                        min = "10"
                        step = "5"
                    />
                
                <label className="form-group"> Price: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={event.price || ""}
                        onChange={(e)=>updateEvent({price: e.target.value})}
                        step="0.01"
                        required
                    />

                <label className="form-group">Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={event.description || ""}
                        onChange={(e)=>updateEvent({description: e.target.value})}
                        required
                    />

                    <div className="button">
                { !isPending && <button> Add new Event</button>}
                { isPending && <button disabled> Adding new Event ...</button>}
                </div>
            </form>
            </div>
        </div>
    )
}
  
export default NewEvent