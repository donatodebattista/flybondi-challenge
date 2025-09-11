import { FaPlane } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function TravelData({ travel }) {
  
  const {data, origin, destination, price, availability} = travel

    const destinationsImages = {
        'BRC': "/places/BRC.jpg",
        'COR': "/places/COR.jpg",
        'MDZ': "/places/MDZ.jpg",
        'EPA': "/places/EPA.jpg",
    };

    const places = {
        'BRC': "Bariloche",
        'COR': "Córdoba",
        'MDZ': "Mendoza",
        'EPA': "El Palomar",
    };

    const imgSrc = destinationsImages[destination] || "./assets/places/notFound.png";
    const destinationName = places[destination] || "Unknown Location";
    const originName = places[origin] || "Unknown Location";

    return (
    <div className="flex items-center justify-center p-4">
                <div
                    className="sm:block absolute inset-0 w-full h-full -z-10"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(20px) brightness(0.6)',
                        opacity: 0.9,
                    }}
                />

      <div className="rounded my-auto w-full sm:w-90 mt-4 sm:mt-12">

        <div className="bg-[#404040]">
          <p className="text-xl sm:text-2xl text-white font-bold px-6 py-4">Tu Vuelo</p>
        </div>
        <hr  className="text-[#fdbe15] border-3"/>
        
        <div>
          <img  
            alt={destinationName}
            src={imgSrc}
            className="w-full h-40 object-cover"
          />
        </div>

        <div className="flex flex-row gap-4 items-center bg-[#f2f2f2] px-6 py-4">
          <FaPlane className="text-2xl sm:text-4xl text-slate-400"/>
          <p className="text-lg sm:text-xl"><span className="font-semibold text-slate-800">{originName}</span><span className="text-slate-600 font-light"> a </span><span className="text-slate-800 font-semibold">{destinationName}</span></p>
        </div>

        <div className="flex flex-row gap-4 items-center bg-[#ffffff] px-6 py-4">
          <FaPeopleGroup className="text-2xl sm:text-4xl text-slate-400"/>
          <p className="text-lg sm:text-xl"><span className="text-slate-600 font-light">Disponibilidad </span><span className="font-semibold text-slate-800">{availability}</span></p>
        </div>
        
        <div className="flex flex-row gap-4 items-center bg-[#f2f2f2] px-6 py-4">
          <BsCalendar2DateFill className="text-2xl sm:text-4xl text-slate-400"/>
          <p className="text-lg sm:text-xl"><span className="text-slate-600 font-light">Salida </span><span className="font-semibold text-slate-800">{data}</span></p>
        </div>
        <hr  className="text-[#fdbe15] border-2"/>
        
        <div className="flex flex-row justify-between items-center bg-[#f2f2f2] px-6 py-4">
            <p className="text-lg sm:text-xl text-black font-bold">Total</p>
            <p className="text-lg sm:text-xl font-black text-slate-800">${price}</p>
        </div>
      </div>
    </div>
  )
}
