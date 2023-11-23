import Travel from "./Travel";


const TravelGrid = ({ travels }) => {

  return (
    <div className="travels-grid bg-bgColor flex flex-column flex-wrap justify-center gap-x-3.5 gap-y-10 pt-10 pb-10">      
      {travels.map((travel) => (
      
      <div className="travel-container md:w-1/3 lg:w-1/4 sm:w-1/2">
          <Travel {...travel}/>
      </div>
      
      ))}
    </div>
  );
};

export default TravelGrid;