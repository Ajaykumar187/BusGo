import { useParams } from "react-router-dom";
import SeatLayout from "../components/seat/SeatLayout";

function Booking() {

    const { id } = useParams();

    return <SeatLayout busId={id} />;

}

export default Booking;