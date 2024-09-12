import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../basics/Header/Header";
import designs from "../../../utils/data/designs.json";
import photos from "../../../utils/data/photos.json";

const Projecten = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.pathname === "/design" ? "DESIGN" : "FOTOGRAFIE";


  if(title === "DESIGN"){
    return (
      <Header>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-ivyMode text-black mt-20 ml-8 lg:ml-20">DESIGN</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-20 mt-8 sm:mt-16 md:mt-20 gap-6 sm:gap-10">
          {designs.designs.map((design) => (
            <div
              key={design.number}
            >
              <img className="w-72 xl:w-96 h-72 xl:h-96 absolute -z-10" alt="" src={design.projects} />
              <div onClick={() => {navigate(`/detail/design/${design.align}/${design.name}`)}} className="bg-black transition ease-in-out delay-50 duration-300 opacity-0 hover:opacity-30 absolute grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96"></div>
              <button onClick={() => {navigate(`/detail/design/${design.align}/${design.name}`)}} className="grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96">
                <h3 className="text-white text-2xl xl:text-4xl text-center transition ease-in-out delay-50 duration-300 hover:scale-110">{design.name}</h3>
              </button>
            </div>
          ))}
        </div>
      </Header>
    );
  } else if (title === "FOTOGRAFIE") {
    return (
      <Header>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-ivyMode text-black mt-20 ml-8 lg:ml-20">FOTOGRAFIE</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-20 mt-8 sm:mt-16 md:mt-20 gap-6 sm:gap-10">
          {photos.photos.map((photo) => (
            <div
              key={photo.number}
            >
              <img className="w-72 xl:w-96 h-72 xl:h-96 absolute -z-10" alt="" src={photo.projects} />
              <div onClick={() => {navigate(`/detail/photo/${photo.align}/${photo.name}`)}} className="bg-black transition ease-in-out delay-50 duration-300 opacity-0 hover:opacity-30 absolute grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96"></div>
              <button onClick={() => {navigate(`/detail/photo/${photo.align}/${photo.name}`)}} className="grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96">
                <h3 className="text-white text-2xl xl:text-4xl text-center transition ease-in-out delay-50 duration-300 hover:scale-110">{photo.name}</h3>
              </button>
            </div>
          ))}
        </div>
      </Header>
    );
  }
};

export default Projecten;
