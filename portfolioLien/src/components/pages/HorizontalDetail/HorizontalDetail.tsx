import { useLocation } from "react-router-dom";
import Header from "../../basics/Header/Header";
import designs from "../../../utils/data/designs.json";
import photos from "../../../utils/data/photos.json";


const HorizontalDetail = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const project = path[2];
  const name = decodeURIComponent(path[4]);
  let design;
  let photo;
  if (project === "design") {
    design = designs.designs.find(design => design.name === name)
    if(design)
    return (
      <Header>
        <div className="px-10 sm:px-20 md:px-28 xl:pr-80 mt-20 gap-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ivyMode overflow-hidden text-black ">{design.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-black mt-6">{design.description}</p>
          <div className="flex flex-col items-end mt-4">
            <img src={design.details} alt="" className="h-44 sm:h-64 md:h-80 lg:h-100 w-100vh mt-8 mr-0.5"/>
            <img src="/portfolio_icon_green.svg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-32 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 -mr-8 sm:-mr-10 md:-mr-12 lg:-mr-16"/>
          </div>
        </div>
      </Header>
    );
  } else if (project === "photo") {
    photo = photos.photos.find(photo => photo.name === name)
    if(photo)
    return (
      <Header>
        <div className="px-10 sm:px-20 md:px-28 xl:pr-80 mt-20 gap-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ivyMode overflow-hidden text-black ">{photo.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-black mt-6">{photo.description}</p>
          <div className="flex flex-col items-end mt-4">
            <img src={photo.details} alt="" className="h-48 sm:h-64 md:h-80 lg:h-100 w-100vh mt-8 mr-0.5"/>
            <img src="/portfolio_icon_green.svg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-32 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 -mr-8 sm:-mr-10 md:-mr-12 lg:-mr-16"/>
          </div>
        </div>
      </Header>
    );
  }
};

export default HorizontalDetail;
