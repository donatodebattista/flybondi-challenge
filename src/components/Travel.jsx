export default function Travel({ data, origin, destination, price, availability }){
    
    return(
        <div className="m-auto bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <div className="bg-bgTravelCard px-6 py-4">
                <p className="font-bold text-xl mb-2">Travel</p>
                <p className="text-gray-700 text-base"><b>Date: </b>{data}</p>
                <p className="text-gray-700 text-base"><b>Origin: </b>{origin}</p>
                <p className="text-gray-700 text-base"><b>Destination: </b>{destination}</p>
                <p className="text-gray-700 text-base"><b>Price: </b>${price}</p>
                <p className="text-gray-700 text-base"><b>Availability: </b>{availability}</p>
                <button type="button" className="px-4 py-2 mt-6 text-sm font-bold font-sans text-white transition-all duration-150 bg-btn-primary rounded shadow outline-none hover:shadow-md hover:bg-btn-hover ease">Go!</button>
            </div>
        </div>
    )
}