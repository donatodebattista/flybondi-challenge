import React from 'react';
import { Plane, Clock, MoveRight, Luggage, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { getMockedFlightDetails, formatTime, formatDuration } from '../lib/mock';

export default function FlightCard({ travel }) {
    const { data: date, origin, destination, price, availability, id } = travel;
    const navigate = useNavigate();

    const {
        airline,
        startTime,
        endTime,
        durationMins,
        layovers,
        originName,
        destName
    } = getMockedFlightDetails(id, origin, destination);

    // Format date string smoothly: '2021-11-15' -> 'Nov 15, 2021'
    const formattedDate = new Date(date).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return (
        <div
            onClick={() => navigate(`/${id}`)}
            className="group bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row w-full max-w-4xl mx-auto cursor-pointer relative"
        >

            {/* Date Badge */}
            <div className="absolute top-0 right-0 md:bg-gray-100 bg-white/90 text-gray-500 font-medium text-[10px] md:text-xs px-3 py-1 md:rounded-bl-xl z-20 md:border-b md:border-l border-gray-200">
                {formattedDate}
            </div>

            {/* Left Section - Flight Details */}
            <div className="flex-1 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4 md:gap-8 min-w-0">

                {/* Airline Logo Mock */}
                <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-1 sm:w-20 shrink-0">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border shadow-sm", airline.color)}>
                        {airline.initials}
                    </div>
                    <span className="text-xs font-medium text-gray-500 text-center line-clamp-2 md:line-clamp-1">{airline.name}</span>
                </div>

                {/* Times & Route */}
                <div className="flex-1 w-full flex flex-row justify-between items-center sm:px-4">

                    {/* Departure */}
                    <div className="flex flex-col text-left min-w-[60px]">
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">{formatTime(startTime)}</span>
                        <span className="text-sm font-medium text-gray-500 mt-0.5" title={originName}>{origin}</span>
                    </div>

                    {/* Duration & Line */}
                    <div className="flex flex-col items-center flex-1 px-3 md:px-8 relative min-w-0">
                        <span className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1 whitespace-nowrap">
                            <Clock size={12} /> {formatDuration(durationMins)}
                        </span>
                        <div className="w-full relative flex items-center justify-center group-hover:px-2 transition-all duration-300">
                            <div className="w-full border-t-[1.5px] border-dashed border-gray-300 absolute transition-colors group-hover:border-blue-300"></div>
                            <div className={cn(
                                "z-10 bg-white px-2 py-[2px] text-[10px] font-bold rounded-full border shadow-sm whitespace-nowrap",
                                layovers > 0 ? "border-amber-200 text-amber-600" : "border-emerald-200 text-emerald-600"
                            )}>
                                {layovers > 0 ? `${layovers} Escala${layovers > 1 ? 's' : ''}` : 'Directo'}
                            </div>
                            <Plane size={14} className="absolute -right-3 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>

                    {/* Arrival */}
                    <div className="flex flex-col text-right min-w-[60px]">
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">{formatTime(endTime)}</span>
                        <span className="text-sm font-medium text-gray-500 mt-0.5" title={destName}>{destination}</span>
                    </div>
                </div>
            </div>

            {/* Right Section - Price & CTA (Separated visually) */}
            <div className="md:w-[260px] bg-gradient-to-b from-gray-50/50 to-gray-50 p-5 md:p-6 border-t md:border-t-0 md:border-l border-gray-100 flex flex-row md:flex-col justify-between items-center md:items-stretch gap-4 shrink-0 relative">
                <div className="absolute top-1/2 -left-[1px] -translate-y-1/2 w-[2px] h-10 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>

                <div className="flex flex-col text-left md:text-right">
                    <span className="text-xs font-medium text-gray-400 mb-1">Precio total por pasajero</span>
                    <span className="text-[32px] font-black text-gray-900 leading-none">
                        <span className="text-lg font-bold text-gray-400 mr-1.5 align-top">USD</span>
                        {Math.floor(price)}
                    </span>
                    <span className="text-[11px] text-emerald-600 mt-2 font-semibold bg-emerald-50 px-2.5 py-[3px] rounded-md self-start md:self-end flex items-center gap-1 border border-emerald-100">
                        <Luggage size={12} /> {availability} asientos disp.
                    </span>
                </div>

                <button className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_4px_14px_rgba(37,99,235,0.39)] hover:-translate-y-[1px] shrink-0">
                    Elegir <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
