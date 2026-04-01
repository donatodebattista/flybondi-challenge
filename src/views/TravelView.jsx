import { useParams, Link } from "react-router-dom"
import travels from '../data/dataset.json'
import NotFoundView from "./NotFoundView";
import TravelData from "../components/TravelData";
import { ArrowLeft } from "lucide-react";

export default function TravelView() {
    const { id } = useParams();
    const actualTravel = travels.find(travel => travel.id === Number(id));
    
    return (
        <main className="flex-1 flex flex-col min-h-0 bg-gray-50 w-full py-8 md:py-12">
            <div className="max-w-4xl mx-auto w-full px-4 md:px-6">
                
                <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Volver al listado
                </Link>

                {actualTravel ? (
                    <TravelData travel={actualTravel}/>
                ) : (
                    <NotFoundView/>
                )}
            </div>
        </main>
    )
}