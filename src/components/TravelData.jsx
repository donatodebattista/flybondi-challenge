import React from 'react';
import { Plane, Calendar, Clock, Luggage, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getMockedFlightDetails, formatTime, formatDuration } from '../lib/mock';
import { cn } from '../lib/utils';

export default function TravelData({ travel }) {
    const { data: date, origin, destination, price, availability, id } = travel;

    const {
        airline,
        startTime,
        endTime,
        durationMins,
        layovers,
        originName,
        destName
    } = getMockedFlightDetails(id, origin, destination);

    const formattedDate = new Date(date).toLocaleDateString('es-AR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

            {/* Flight Main Itinerary Layout */}
            <div className="flex-1 p-6 md:p-10 flex flex-col">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Detalle de Itinerario</h2>
                        <p className="text-gray-500 font-medium capitalize mt-1 flex items-center gap-2">
                            <Calendar size={16} className="text-blue-600" /> {formattedDate}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200">
                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]", airline.color)}>
                            {airline.initials}
                        </div>
                        {airline.name}
                        <span className="text-gray-400 font-normal ml-1">#FB{id}</span>
                    </div>
                </div>

                {/* Timeline visualization */}
                <div className="relative flex flex-col ml-4 sm:ml-8 mt-4 gap-12 border-l-2 border-dashed border-gray-200 pl-8 md:pl-12 pb-8">

                    {/* Origin Node */}
                    <div className="relative">
                        <div className="absolute -left-[43px] md:-left-[59px] top-1 w-5 h-5 bg-white border-4 border-blue-600 rounded-full"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-gray-900">{formatTime(startTime)}</span>
                            <span className="text-lg font-semibold text-gray-700 mt-1">{originName} ({origin})</span>
                            <span className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-emerald-500" /> Vuelo confirmado
                            </span>
                        </div>
                    </div>

                    {/* In Flight info */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-4 border border-gray-200 rounded-full flex flex-col items-center gap-2 z-10">
                        <Plane size={20} className="text-blue-600 rotate-180" />
                    </div>

                    <div className="bg-blue-50/50 p-4 rounded-xl ml-4 mr-0 border border-blue-100 flex items-center gap-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Duración</span>
                            <span className="text-sm font-medium text-blue-900 flex items-center gap-1.5"><Clock size={16} /> {formatDuration(durationMins)}</span>
                        </div>
                        <div className="w-px h-8 bg-blue-200"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Tipo de viaje</span>
                            <span className="text-sm font-medium text-blue-900">
                                {layovers > 0 ? `${layovers} Escala${layovers > 1 ? 's' : ''}` : 'Vuelo Directo'}
                            </span>
                        </div>
                    </div>

                    {/* Destination Node */}
                    <div className="relative">
                        <div className="absolute -left-[43px] md:-left-[59px] top-1 w-5 h-5 bg-blue-600 border-4 border-blue-200 rounded-full"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-gray-900">{formatTime(endTime)}</span>
                            <span className="text-lg font-semibold text-gray-700 mt-1">{destName} ({destination})</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Pricing and Action Sidebar */}
            <div className="lg:w-80 bg-gray-50 p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">

                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-4">Resumen de Compra</h3>

                    <ul className="flex flex-col gap-3 text-sm text-gray-600">
                        <li className="flex justify-between items-center">
                            <span className="flex items-center gap-2"><User size={16} /> 1 Adulto</span>
                            <span className="font-medium text-gray-900">USD {Math.floor(price)}</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="flex items-center gap-2"><Luggage size={16} /> Equipaje de mano</span>
                            <span className="text-emerald-600 font-medium text-xs bg-emerald-50 px-2 py-0.5 rounded">Incluido</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="flex items-center gap-2"><ShieldCheck size={16} /> Impuestos y tasas</span>
                            <span className="font-medium text-gray-900">USD 0</span>
                        </li>
                    </ul>

                    <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
                        <span className="text-base font-semibold text-gray-700">Total a pagar</span>
                        <span className="text-3xl font-black text-gray-900 leading-none">
                            <span className="text-lg font-bold text-gray-400 mr-1.5 align-top">USD</span>
                            {Math.floor(price)}
                        </span>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                    <div className={cn("text-center text-xs font-semibold py-1.5 rounded-md", availability > 5 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700")}>
                        {availability} asientos disponibles a este precio
                    </div>
                    <button className="hover:cursor-pointer hover:w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        Confirmar Reserva
                    </button>
                    <span className="text-xs text-center text-gray-500 mt-2">
                        💳 Pago seguro verificado
                    </span>
                </div>

            </div>
        </div>
    )
}
