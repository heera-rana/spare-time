function EventForm ({event, onSubmit, updateEvent, isPending, buttonLabel, title}){
    return (
        <div>
            <div className= "form">
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                <label for="title">Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={event.title || ""}
                        onChange={(e)=>updateEvent({title: e.target.value})}
                        required
                    />
                
                <label for="Category"> Category: </label>
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

                <label for="Provider"> Provider: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="provider"
                        value={event.provider || ""}
                        onChange={(e)=>updateEvent({provider: e.target.value})}
                        required
                    />
               
                <label for="Date"> Date: </label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="date"
                        value={event.time}
                        onChange={(e)=>updateEvent({date: e.target.value})}
                        required
                    />

                <label for="Availabilty"> Availability: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="availability"
                        value={event.availability || ""}
                        onChange={(e)=>updateEvent({availability: e.target.value})}
                        required
                    />

                <label for="Duration"> Duration: </label>
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
                
                <label for="Price"> Price: </label>
                        <input type="number" 
                        class="form-control" 
                        d="price" 
                        step="0.01" 
                        required="" value=""
                        onChange={(e)=>updateEvent({price: e.target.value})}
                        
                    />

                <label for="Description">Description: </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        value={event.description || ""}
                        onChange={(e)=>updateEvent({description: e.target.value})}
                        required
                    />

                    <div>
                { !isPending && 
                <label className="button"> {buttonLabel[0]}</label>}
                { isPending && <button className="button" disabled> {buttonLabel[1]}</button>}
                </div>
            </form>
            </div>
        </div>
    )
}

export default EventForm