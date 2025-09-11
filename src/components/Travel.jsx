export default function Travel({ travel }) {
    
    const { data, origin, destination, price, availability, id } = travel

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
        <div className="max-w-xs rounded-lg shadow-lg bg-white border border-[#dadada] flex flex-col overflow-hidden" onClick={(e) => {console.log(e)}}>
            <a href={`/${id}`}>
                <div>
                <p className="text-white font-semibold text-sm absolute p-1 bg-[#e3ddc7c9] rounded m-2">{data}</p>
                <img
                    alt={destinationName}
                    src={imgSrc}
                    className="w-full h-40 object-cover"
                />
                </div>

                <div className="p-4 flex flex-col gap-2">
                    <p className="font-bold text-2xl text-center">{destinationName}</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600"><span className="font-bold">Ida</span> desde {originName}</p>
                        <p className="text-gray-700 text-sm"><b>Disponibilidad:</b> {availability}</p>
                    </div>
                    <div className="mt-3 flex justify-center">
                        <span className="bg-[#fdbe15] text-white font-bold text-lg px-4 py-2 rounded shadow">
                            USD$ {price}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}