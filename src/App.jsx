import { useState } from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer';
import TravelGrid from './components/TravelGrid'

import './App.css'
import dataset from './data/dataset.json'

function App() {
  const [filteredTravels, setFilteredTravels] = useState(dataset);
  const [filterPrice, setFilterPrice] = useState('');

  const handleFilter = () => {
    const filtered = dataset.filter((travel) => travel.price <= parseFloat(filterPrice));
    setFilteredTravels(filtered);
  };


  return (
    <>
      <main>
        <div>
          <Header />
        </div>

        {/* INPUT DE PRECIO */}
        <div className="price-input-container py-20">
          
          <div className='price-input-form flex flex-col justify-center items-center mx-auto lg:w-1/2 lg:py-10 md:w-96 md:py-6 sm:w-96 sm:py-6'>
            
            <h2 className='text-white font-semibold sm:text-xs lg:text-xl mb-4'>Filter Travels</h2>
            
            <input
              type="number"
              placeholder="Max Price"
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className='price-input lg:w-1/3 md:w-1/2 sm:w-1/2 price-input rounded p-1 text-black'
            />
            
            <button 
            className="btn-price-form px-4 py-2 mt-4 text-sm lg:w-1/3 md:w-1/2 sm:w-1/2 font-bold font-sans text-white transition-all duration-150 bg-btn-primary rounded shadow outline-none hover:shadow-md hover:bg-btn-hover ease"
            onClick={handleFilter}>Filter
            </button>

          </div>
        </div>

        {/* GRID DE VIAJES */}
        <TravelGrid travels={filteredTravels} />
        <Footer/>
      </main>
    </>
  )
}

export default App
