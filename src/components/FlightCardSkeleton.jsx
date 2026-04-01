import React from 'react';

export default function FlightCardSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row w-full max-w-4xl mx-auto animate-pulse">
            
            {/* Left Section - Flight Details */}
            <div className="flex-1 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4 md:gap-8">
                
                {/* Airline Logo Mock */}
                <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-1 sm:w-20 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded mt-1"></div>
                </div>

                {/* Times & Route */}
                <div className="flex-1 w-full flex flex-row justify-between items-center sm:px-4">
                    {/* Departure */}
                    <div className="flex flex-col text-left gap-2 w-16">
                        <div className="h-8 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-10"></div>
                    </div>

                    {/* Duration & Line */}
                    <div className="flex flex-col items-center flex-1 px-4 relative gap-2">
                        <div className="h-3 bg-gray-200 rounded w-12"></div>
                        <div className="w-full relative flex items-center justify-center mt-2">
                            <div className="w-full h-px bg-gray-200 absolute"></div>
                        </div>
                    </div>

                    {/* Arrival */}
                    <div className="flex flex-col text-right gap-2 w-16 items-end">
                        <div className="h-8 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-10"></div>
                    </div>
                </div>
            </div>

            {/* Right Section - Price & CTA */}
            <div className="md:w-64 bg-gray-50 p-5 md:p-6 border-t md:border-t-0 md:border-l border-gray-100 flex flex-row md:flex-col justify-between items-center md:items-stretch gap-4">
                <div className="flex flex-col text-left md:text-right w-full gap-2">
                    <div className="h-3 bg-gray-200 rounded w-24 md:self-end"></div>
                    <div className="h-8 bg-gray-200 rounded w-28 md:self-end"></div>
                    <div className="h-5 bg-gray-200 rounded w-20 md:self-end"></div>
                </div>
                
                <div className="h-12 bg-gray-200 rounded-lg w-32 md:w-full shrink-0"></div>
            </div>
        </div>
    );
}
