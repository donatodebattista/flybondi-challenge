import { useParams } from "react-router"
import travels from '../data/dataset.json'
import NotFoundView from "./NotFoundView";
import TravelData from "../components/TravelData";

export default function TravelView() {

    const {id} = useParams()
    const actualTravel = travels.find(travel => travel.id === Number(id));
    
    return (
        <div>
            {actualTravel ? ( <TravelData travel={actualTravel}/> ) : ( <NotFoundView/> )}
        </div>
    )
}