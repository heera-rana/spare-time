import { useLocation, useNavigate } from "react-router-dom";
import OneEvent from "../components/OneEvent";

function EventDetails (props) {
    const eventData = useLocation();
    const navigate = useNavigate()

    return (
        <div>
            <OneEvent eventData={eventData} />
            <button onClick={() => navigate('/events')} >go back</button>
        </div>
    );
}
    
export default EventDetails;