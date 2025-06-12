import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../basics/Header/Header";
import designs from "../../../utils/data/designs.json";
import photos from "../../../utils/data/photos.json";
import photoshops from "../../../utils/data/shops.json"

const Projecten = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.pathname

  if(title === "/design"){
    return (
      <Header>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-ivyMode text-black mt-20 ml-8 lg:ml-20">DESIGN</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid max-sm:w-screen max-sm:justify-items-center sm:grid-cols-2 lg:grid-cols-3 sm:mx-8 lg:mx-20 mt-8 sm:mt-16 md:mt-20 gap-6 sm:gap-10">
          {designs.designs.map((design) => (
            <div
              key={design.number}
            >
              <img className="w-72 xl:w-96 h-72 xl:h-96 absolute -z-10" alt="" src={design.projects} />
              <div onClick={() => {navigate(`/detail/design/${design.name}`)}} className="bg-black transition ease-in-out delay-50 duration-300 opacity-0 hover:opacity-30 absolute grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96"></div>
              <button onClick={() => {navigate(`/detail/design/${design.name}`)}} className="grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96">
                <h3 className="text-white text-2xl xl:text-4xl text-center transition ease-in-out delay-50 duration-300 hover:scale-110">{design.name}</h3>
              </button>
            </div>
          ))}
        </div>
      </Header>
    );
  } else if (title === "/fotografie") {
    return (
      <Header>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-ivyMode text-black mt-20 ml-8 lg:ml-20">PHOTOGRAPHY</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid max-sm:w-screen max-sm:justify-items-center sm:grid-cols-2 lg:grid-cols-3 sm:mx-8 lg:mx-20 mt-8 sm:mt-16 md:mt-20 gap-6 sm:gap-10">
          {photos.photos.map((photo) => (
            <div
              key={photo.number}
            >
              <img className="w-72 xl:w-96 h-72 xl:h-96 absolute -z-10" alt="" src={photo.projects} />
              <div onClick={() => {navigate(`/detail/photo/${photo.name}`)}} className="bg-black transition ease-in-out delay-50 duration-300 opacity-0 hover:opacity-30 absolute grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96"></div>
              <button onClick={() => {navigate(`/detail/photo/${photo.name}`)}} className="grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96">
                <h3 className="text-white text-2xl xl:text-4xl text-center transition ease-in-out delay-50 duration-300 hover:scale-110">{photo.name}</h3>
              </button>
            </div>
          ))}
        </div>
      </Header>
    );
  } else if (title === "/photoshop") {
    return (
      <Header>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-ivyMode text-black mt-20 ml-8 lg:ml-20">PHOTOSHOP</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid max-sm:w-screen max-sm:justify-items-center sm:grid-cols-2 lg:grid-cols-3 sm:mx-8 lg:mx-20 mt-8 sm:mt-16 md:mt-20 gap-6 sm:gap-10">
          {photoshops.photoshops.map((photo) => (
            <div
              key={photo.number}
            >
              <img className="w-72 xl:w-96 h-72 xl:h-96 absolute -z-10" alt="" src={photo.projects} />
              <div onClick={() => {navigate(`/detail/shop/${photo.name}`)}} className="bg-black transition ease-in-out delay-50 duration-300 opacity-0 hover:opacity-30 absolute grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96"></div>
              <button onClick={() => {navigate(`/detail/shop/${photo.name}`)}} className="grid cursor-pointer place-items-center z-20 w-72 xl:w-96 h-72 xl:h-96">
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
