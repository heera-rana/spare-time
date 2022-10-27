import React, {useState, useReducer} from "react"

function NewEvent (){
    
    const [event, setEvent] = useState([])

    function updateEvent(value){
        return setEvent((prev) => {
            return {...prev, ...value}
        })
    } //... or spread syntax allows us to make shallow copies of js opjects  by expanding an array into individual elements


    async function onSubmit(e){
        e.preventDefault()

        const newEvent ={ ...event}

        await fetch("http://localhost:5000/add-event", {
            method: "POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent),
        })
        .catch(error => {
            window.alert(error);
            return
        })




        setEvent({ title: "", categories: "", provider: "", time: "", duration: "", price: "", description:""})




       // navigate('/')
    }

    return (
        <div>
            <h1>Add new event</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    Event Title:
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={event.title}
                    onChange={(e)=>updateEvent({title: e.target.value})}
                    required
                    />
                </div>
                
                <div className="form-group">
                    Category:
                    <select value={event.categories || ""} onChange={updateEvent} className="form-control">
                        <option value= "Childrens Events">Childrens Events</option>
                        <option value="Classes and Workshops">Classes and Workshops</option>
                        <option value="Evening Events">Evening Events</option>
                        <option value="Misc">Misc</option>
                        <option value="Music Events">Music Events</option>
                        <option value="Sports and Fitness">Sports and Fitness</option>
                        {/* onChange={(e)=>updateEvent({categories: e.target.value})} */}
                    </select>

                    {/* <input
                    type="text"
                    className="form-control"
                    id="categories"
                    value={event.categories}
                    onChange={(e)=>updateEvent({categories: e.target.value})}
                    /> */}
                </div>
                <div className="form-group">
                    Provider:
                    <input
                    type="text"
                    className="form-control"
                    id="provider"
                    value={event.provider}
                    onChange={(e)=>updateEvent({provider: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    Time:
                    <input
                    type="text"
                    className="form-control"
                    id="time"
                    value={event.time}
                    onChange={(e)=>updateEvent({time: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    Duration:
                    <input
                    type="text"
                    className="form-control"
                    id="duration"
                    value={event.duration}
                    onChange={(e)=>updateEvent({duration: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    Price:
                    <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={event.price}
                    onChange={(e)=>updateEvent({price: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    Description:
                    <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={event.description}
                    onChange={(e)=>updateEvent({description: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    )
}
  
export default NewEvent