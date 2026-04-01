import React from 'react';
import { SearchX } from 'lucide-react';

export default function EmptyState({ resetFilters }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center w-full">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <SearchX size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No encontramos vuelos</h3>
            <p className="text-gray-500 max-w-sm mb-6">
                No hay resultados que coincidan con tus criterios de búsqueda. Intenta ajustar el precio o cambiar el ordenamiento.
            </p>
            <button
                onClick={resetFilters}
                className="bg-gray-900 hover:cursor-pointer hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
                Limpiar filtros
            </button>
        </div>
    );
}
