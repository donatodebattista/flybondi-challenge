import React from 'react';
import { SlidersHorizontal, ArrowDownUp, Check } from 'lucide-react';

const SORT_OPTIONS = [
    { id: 'cheapest', label: 'Más barato' },
    { id: 'fastest', label: 'Más rápido' },
    { id: 'recommended', label: 'Recomendado' }
];

export default function FilterSidebar({
    maxPrice,
    setMaxPrice,
    minAllowedPrice = 0,
    maxAllowedPrice = 1000,
    currentSort,
    setCurrentSort
}) {
    return (
        <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-6">

            {/* Sorting Box */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-4">
                    <ArrowDownUp size={18} className="text-gray-500" />
                    <h3 className="font-semibold text-gray-900">Ordenar por</h3>
                </div>
                <div className="flex flex-col gap-2">
                    {SORT_OPTIONS.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setCurrentSort(option.id)}
                            className={`hover:cursor-pointer flex items-center justify-between p-3 rounded-lg border transition-all ${currentSort === option.id
                                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                                    : 'border-gray-200 hover:border-blue-300 text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            {option.label}
                            {currentSort === option.id && <Check size={16} className="text-blue-600" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filters Box */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal size={18} className="text-gray-500" />
                    <h3 className="font-semibold text-gray-900">Filtrar resultados</h3>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-gray-700">Precio Máximo</span>
                        <span className="font-bold text-gray-900">USD {maxPrice || maxAllowedPrice}</span>
                    </div>

                    <div className="relative pt-1">
                        <input
                            type="range"
                            min={minAllowedPrice}
                            max={maxAllowedPrice}
                            value={maxPrice || maxAllowedPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>USD {minAllowedPrice}</span>
                            <span>USD {maxAllowedPrice}</span>
                        </div>
                    </div>
                </div>

            </div>

        </aside>
    );
}
