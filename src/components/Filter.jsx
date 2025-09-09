import dataset from '../data/dataset.json'
import {} from '../../public/places/lake.jpg'  

export default function Filter() {

  const [filteredTravels, setFilteredTravels] = useState(dataset);
  const [filterPrice, setFilterPrice] = useState('');

  useEffect(() => {
    if (filterPrice === '' || isNaN(filterPrice)) {
      setFilteredTravels(dataset);
    } else {
      const filtered = dataset.filter(
        (travel) => travel.price <= parseFloat(filterPrice)
      );
      setFilteredTravels(filtered);
    }
  }, [filterPrice]);


  return (
          <div className="price-input-container py-20 bg-[url('/places/lake.jpg')] bg-cover bg-center">
            
            <div className='flex flex-col justify-center items-center mx-auto lg:w-1/2 lg:py-10 md:w-96 md:py-6 sm:w-96 sm:py-6 backdrop-blur-lg'>
              
              <h2 className='text-white font-semibold sm:text-xs lg:text-xl mb-4'>Filter Travels</h2>
              <input
                type="number"
                placeholder="Max Price"
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                className='price-input lg:w-1/3 md:w-1/2 sm:w-1/2 price-input rounded p-1 text-black'
                min="0"
              />
            </div>
          </div>

    
  )
}
