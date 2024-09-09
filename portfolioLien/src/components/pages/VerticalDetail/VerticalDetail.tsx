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
        <div className="flex px-20 mt-20 gap-20">
          <div className="w-1/3">
            <h1 className="text-5xl font-ivyMode font-bold overflow-hidden text-black ">{design.name}</h1>
            <p className="text-2xl text-black mt-6">{design.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <img src={design.details} alt="" className="h-5/6 mt-20"/>
            <img src="/portfolio_icon_green.svg" alt="" className="h-32 -mt-16 -mr-16"/>
          </div>
        </div>
      </Header>
    );
  } else if (project === "photo") {
    photo = photos.photos.find(photo => photo.name === name)
    if(photo)
    return (
      <Header>
        <div className="flex px-20 mt-20 gap-20">
          <div className="w-1/3">
            <h1 className="text-5xl font-ivyMode font-bold overflow-hidden text-black ">{photo.name}</h1>
            <p className="text-2xl text-black mt-6">{photo.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <img src={photo.details} alt="" className="h-5/6 mt-20"/>
            <img src="/portfolio_icon_green.svg" alt="" className="h-32 -mt-16 -mr-16"/>
          </div>
        </div>
      </Header>
    );
  }

};

export default VerticalDetail;
