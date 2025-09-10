import AppLayout from './layouts/AppLayout';
import { useState, useEffect, use } from 'react';
import dataset from './data/dataset.json'
import Travel from './components/Travel';

function App() {
  const [filteredTravels, setFilteredTravels] = useState(dataset);
  const [filterPrice, setFilterPrice] = useState('');
  const [page, setPage] = useState(1);
  const travelsPerPage = 12;



  useEffect(() => {
    if (filterPrice === "" || isNaN(filterPrice)) {
      setFilteredTravels(dataset);
    } else {
      const filtered = dataset.filter(
        (travel) => travel.price <= parseFloat(filterPrice)
      );
      setFilteredTravels(filtered);
    }
    setPage(1); // 👈 Resetear a la primera página al filtrar
  }, [filterPrice]);


  // --- Paginación ---
  const totalPages = Math.ceil(filteredTravels.length / travelsPerPage);
  const startIndex = (page - 1) * travelsPerPage;
  const endIndex = startIndex + travelsPerPage;
  const currentTravels = filteredTravels.slice(startIndex, endIndex);

  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPage(1);
    }
  }, [totalPages, page]);

  return (
      <AppLayout>
        <main className='flex-1 flex flex-col min-h-0'>

          {/* INPUT DE PRECIO */}
          <div className="price-input-container py-12 sm:py-20 bg-[url('/places/lake.jpg')] bg-cover bg-center">
            
            <div className='h-[160px] flex flex-col justify-center items-center mx-auto lg:w-1/2 lg:py-15 md:w-96 md:py-6 sm:w-96 sm:py-6 backdrop-blur-md sm:rounded-lg'>
              
              <h2 className='text-white font-semibold text-md sm:text-lg lg:text-xl mb-4'>Filtrar viajes</h2>
                  <input
                    type="number"
                    placeholder="Precio Máximo"
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="lg:w-1/3 md:w-1/2 sm:w-1/2 h-6 rounded-sm p-1 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2"
                    min="0"
                  />
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 max-w-6xl mx-auto pt-14 sm:pt-36 pb-10 px-4">
            {currentTravels.map((travel, idx) => (
              <Travel key={idx} {...travel} />
            ))}
          </div>


          {/* Controles de paginación */}
          <div className="flex justify-center gap-2 sm:mt-10 items-center bg-neutral-800 w-fit mx-auto px-4 py-2 sm:py-4 sm:px-18 rounded">
            <button
              disabled = { (page === 1 || totalPages === 0) ? true : false }
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-default cursor-pointer bg-white text-sm sm:text-md"
            >
              Anterior
            </button>
            <span className='text-white font-semibold text-sm'>
              {totalPages === 0 ? 0 : page} de {totalPages}
            </span>
            <button
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-70 disabled:cursor-default cursor-pointer bg-white text-sm sm:text-md"
            >
              Siguiente
            </button>
          </div>
        </main>
      </AppLayout>
  )
}

export default App
