function EventForm ({event, onSubmit, updateEvent, isPending, buttonLabel, title}){
    return (
        <div>
            <div className= "form">
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                <label>Title: 
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={event.title || ""}
                        onChange={(e)=>updateEvent({title: e.target.value})}
                        required
                        placeholder="Title of the Event"
                    />
                </label>
                <label> Category:
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
                </label>
                <label> Provider:
                    <input
                        type="text"
                        className="form-control"
                        id="provider"
                        value={event.provider || ""}
                        onChange={(e)=>updateEvent({provider: e.target.value})}
                        required
                        placeholder="Person/company hosting the event"
                    />
               
                </label>
                <label> Date:
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={event.date || ""}
                        onChange={(e)=>updateEvent({date: e.target.value})}
                        required
                        placeholder="Date of the event"
                    />
                </label>
                <label> Time:
                    <input
                        type="time"
                        className="form-control"
                        id="date"
                        value={event.time}
                        onChange={(e)=>updateEvent({time: e.target.value})}
                        required
                    />
                </label>
                <label> Availability:
                    <input
                        type="number"
                        className="form-control"
                        id="availability"
                        value={event.availability || ""}
                        onChange={(e)=>updateEvent({availability: e.target.value})}
                        required
                        placeholder="Available Places"
                    />
                </label>
                <label> Duration:
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        value={event.duration || ""}
                        onChange={(e)=>updateEvent({duration: e.target.value})}
                        required
                        placeholder="Minutes"
                        min = "10"
                        step = "5"
                    />
                </label>
                <label> Price:
                    <input 
                        type="number" 
                        className="form-control" 
                        id="price" 
                        step="0.01" 
                        required 
                        value={event.price || ""}
                        onChange={(e)=>updateEvent({price: e.target.value})}
                        placeholder="Price in great british pounds"                        
                    />
                </label>
                <label>Description:
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        value={event.description || ""}
                        onChange={(e)=>updateEvent({description: e.target.value})}
                        required
                        placeholder="Description"
                    />
                </label>
                
                <div>
                <label htmlFor="submit button">
                    { !isPending && 
                    <button className="button"> {buttonLabel[0]}</button>}
                </label>
                { isPending && <button className="button" disabled> {buttonLabel[1]}</button>}
                </div>
            </form>
            </div>
        </div>
    )
}

export default EventForm