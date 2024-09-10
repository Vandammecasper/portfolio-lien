import Header from "../../basics/Header/Header";
import designs from "../../../utils/data/designs.json";
import photos from "../../../utils/data/photos.json";
import { useLocation } from "react-router-dom";


const VerticalDetail = () => {

  const location = useLocation();
  const path = location.pathname.split('/');
  const project = path[2];
  const name = decodeURIComponent(path[4]);
  let design;
  let photo;

  if(project === "design"){
    design = designs.designs.find(design => design.name === name)
    if(design)
    return (
      <Header>
        <div className="flex justify-between px-28 pr-32 mt-20">
          <div className="w-2/5">
            <h1 className="text-5xl font-ivyMode overflow-hidden text-black ">{design.name}</h1>
            <p className="text-2xl text-black mt-6">{design.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <img src={design.details} alt="" className="h-100 2xl:h-110 w-100vh mr-0.5"/>
            <img src="/portfolio_icon_green.svg" alt="" className="h-24 -mt-12 -mr-12"/>
          </div>
        </div>
      </Header>
    );
  } else if (project === "photo") {
    photo = photos.photos.find(photo => photo.name === name)
    if(photo)
    return (
      <Header>
        <div className="flex justify-between px-28 pr-32 mt-20">
          <div className="w-2/5">
            <h1 className="text-5xl font-ivyMode overflow-hidden text-black ">{photo.name}</h1>
            <p className="text-2xl text-black mt-6">{photo.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <img src={photo.details} alt="" className="h-100 2xl:h-110 w-100vh mr-0.5"/>
            <img src="/portfolio_icon_green.svg" alt="" className="h-24 -mt-12 -mr-12"/>
          </div>
        </div>
      </Header>
    );
  }

};

export default VerticalDetail;
