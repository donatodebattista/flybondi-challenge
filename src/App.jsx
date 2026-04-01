import React, { useState, useEffect, useMemo } from 'react';
import dataset from './data/dataset.json';
import FlightCard from './components/FlightCard';
import FlightCardSkeleton from './components/FlightCardSkeleton';
import FilterSidebar from './components/FilterSidebar';
import EmptyState from './components/EmptyState';
import { getMockedFlightDetails } from './lib/mock';
import { PlaneTakeoff } from 'lucide-react';

function App() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentSort, setCurrentSort] = useState('recommended');
  
  // Pagination
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Derive flights with mock data once
  const flightsWithMockData = useMemo(() => {
    return dataset.map(flight => ({
      ...flight,
      _mocked: getMockedFlightDetails(flight.id, flight.origin, flight.destination)
    }));
  }, []);

  // Filter & Sort
  const processedFlights = useMemo(() => {
    let result = flightsWithMockData.filter(f => f.price <= maxPrice);

    if (currentSort === 'cheapest') {
      result.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'fastest') {
      result.sort((a, b) => a._mocked.durationMins - b._mocked.durationMins);
    } else if (currentSort === 'recommended') {
      result.sort((a, b) => a._mocked.recommendedScore - b._mocked.recommendedScore);
    }

    return result;
  }, [flightsWithMockData, maxPrice, currentSort]);

  // Pagination logic
  const currentFlights = processedFlights.slice(0, visibleCount);
  const hasMore = visibleCount < processedFlights.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 10);
      setIsLoadingMore(false);
    }, 800); // simulated network delay
  };

  // Reset pagination when filters OR sort change
  useEffect(() => {
    setVisibleCount(10);
  }, [maxPrice, currentSort]);

  const resetFilters = () => {
    setMaxPrice(1000);
    setCurrentSort('recommended');
  };

  return (
    <main className="flex-1 flex flex-col min-h-0 bg-gray-50 w-full">
      
      {/* Search Header */}
      <div className="bg-blue-600 w-full py-12 px-6">
          <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-4">
              <div className="bg-blue-500/30 p-4 rounded-2xl">
                  <PlaneTakeoff size={36} className="text-white" />
              </div>
              <div>
                  <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Encuentra tu próximo vuelo</h1>
                  <p className="text-blue-100 font-medium">Las mejores tarifas y conexiones para tu viaje.</p>
              </div>
          </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar container */}
        <div className="lg:w-[320px] shrink-0">
          <FilterSidebar 
            maxPrice={maxPrice} 
            setMaxPrice={setMaxPrice} 
            minAllowedPrice={100}
            maxAllowedPrice={1000}
            currentSort={currentSort}
            setCurrentSort={setCurrentSort}
          />
        </div>
        
        {/* Results container */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          {/* Header row with results count */}
          <div className="flex items-center justify-between px-1">
             <h2 className="text-lg font-bold text-gray-900">
                {processedFlights.length} {processedFlights.length === 1 ? 'vuelo encontrado' : 'vuelos encontrados'}
             </h2>
          </div>

          {processedFlights.length === 0 ? (
              <EmptyState resetFilters={resetFilters} />
          ) : (
              <>
                <div className="flex flex-col gap-4">
                  {currentFlights.map(flight => (
                    <FlightCard key={flight.id} travel={flight} />
                  ))}
                </div>
                
                {isLoadingMore && (
                  <div className="flex flex-col gap-4 mt-2">
                      <FlightCardSkeleton />
                      <FlightCardSkeleton />
                  </div>
                )}

                {hasMore && !isLoadingMore && (
                  <div className="flex justify-center mt-6 mb-12">
                    <button 
                      onClick={handleLoadMore}
                      className="bg-white border border-gray-200 text-blue-600 font-bold py-3 px-8 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all active:scale-95"
                    >
                        Cargar más vuelos
                    </button>
                  </div>
                )}
              </>
          )}
        </div>

      </div>
    </main>
  );
}

export default App;
