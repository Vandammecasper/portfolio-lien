import { useLocation, useNavigate } from "react-router-dom";
import designs from "../../../utils/data/designs.json";
import photos from "../../../utils/data/photos.json";
import { useState } from "react";


const Pictures = ({kind, name} : {kind: string, name:string}) => {
  if(kind === "design") {
    const des = designs.designs.find(design => design.name === name)
    if(des?.detailPictures){
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [currentPicture, setCurrentPicture] = useState(0)
      const prevPicture = () => {
        setCurrentPicture((prev) =>
          prev > 0 ? prev - 1 : des.detailPictures.length - 1
        );
      }

      const nextPicture = () => {
        setCurrentPicture((prev) =>
          prev < des.detailPictures.length - 1 ? prev + 1 : 0
        );
      }
      if(des.align == 'horizontal') {
        return(
          <div className="relative flex mt-4 w-full items-center justify-center overflow-hidden sm:gap-4 md:gap-10">
            <img onClick={prevPicture} src="/arrow_left.svg" alt="" className="h-24" />
            <img src={des.detailPictures[currentPicture]} alt="" className="h-32 sm:h-56 md:h-64 lg:h-96 2xl:h-110" />
            <img onClick={nextPicture} src="/arrow_right.svg" alt="" className="h-24"/>
          </div>
        )
      }
      else if(des.align == 'vertical') {
        return(
          <div className="relative flex mt-4 w-full items-center justify-center overflow-hidden sm:gap-4 md:gap-10">
            <img onClick={prevPicture} src="/arrow_left.svg" alt="" className="h-24" />
            <img src={des.detailPictures[currentPicture]} alt="" className="h-60 sm:h-72 md:h-64 lg:h-96 2xl:h-110" />
            <img onClick={nextPicture} src="/arrow_right.svg" alt="" className="h-24"/>
          </div>
        )
      }
    } else {
      return (
        <div className="w-screen flex justify-center">
          <img src={des?.details} alt="" className="h-96 2xl:h-110" />
        </div>
        
      )
    }
  } else if (kind === "photo") {
    const pho = photos.photos.find(photo => photo.name === name)
    if(pho?.detailPictures){
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [currentPicture, setCurrentPicture] = useState(0)
      const prevPicture = () => {
        setCurrentPicture((prev) =>
          prev > 0 ? prev - 1 : pho.detailPictures.length - 1
        );
      }

      const nextPicture = () => {
        setCurrentPicture((prev) =>
          prev < pho.detailPictures.length - 1 ? prev + 1 : 0
        );
      }
      if(pho.align == 'horizontal') {
        return(
          <div className="relative flex mt-4 w-full items-center justify-center overflow-hidden sm:gap-4 md:gap-10">
            <img onClick={prevPicture} src="/arrow_left.svg" alt="" className="h-24" />
            <img src={pho.detailPictures[currentPicture]} alt="" className="h-32 sm:h-56 md:h-64 lg:h-96 2xl:h-110" />
            <img onClick={nextPicture} src="/arrow_right.svg" alt="" className="h-24"/>
          </div>
        )
      }
      else if(pho.align == 'vertical') {
        return(
          <div className="relative flex mt-4 w-full items-center justify-center overflow-hidden sm:gap-4 md:gap-10">
            <img onClick={prevPicture} src="/arrow_left.svg" alt="" className="h-24" />
            <img src={pho.detailPictures[currentPicture]} alt="" className="h-60 sm:h-72 md:h-64 lg:h-96 2xl:h-110" />
            <img onClick={nextPicture} src="/arrow_right.svg" alt="" className="h-24"/>
          </div>
        )
      }
    } else {
      if (pho?.align == 'vertical'){
        return (
          <div className="w-screen flex justify-center">
            <img src={pho?.details} alt="" className="h-96 2xl:h-110" />
          </div>
        )
      }
      else if (pho?.align == 'horizontal'){
        return (
          <div className="w-screen flex justify-center">
            <img src={pho?.details} alt="" className="h-56 sm:h-80 md:h-96 2xl:h-110" />
          </div>
        )
      }
    }
  }
}

const HorizontalDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const path = location.pathname.split('/');
  const project = path[2];
  const name = decodeURIComponent(path[3]);
  let design;
  let photo;

  const handleGoBack = () => {
    navigate(-1);
  }

  if (project === "design") {
    design = designs.designs.find(design => design.name === name)
    if(design)
    return (
      <div className="mb-16">
        <div className="w-screen absolute pl-10 sm:pl-20 md:pl-28 -mt-16 sm:-mt-20">
          <button 
            onClick={handleGoBack} 
            className="flex items-center justify-center gap-0 sm:gap-1 p-0.5 px-3 border-4 border-primary rounded-full 
                      hover:bg-grey transition-colors duration-300"
          >
            <img src="/arrow_left.svg" alt="" className="h-6 sm:h-8 -ml-2"/>
            <p className="max-sm:text-sm">TERUGKEREN</p>
          </button>
        </div>
        <div className="px-10 sm:px-20 md:px-28 xl:pr-80 mt-28 gap-20 mb-8 2xl:mb-16">
          <div className="flex items-end">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-ivyMode overflow-hidden text-black ">{design.name}</h1>
            <img src="/portfolio_icon_green.svg" alt="" className="h-2.5 sm:h-3 lg:h-4 ml-1.5 max-sm:mb-0.5"/>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-black mt-6">{design.description}</p>
        </div>
        <Pictures kind="design" name={design.name} />
      </div>
    );
  } else if (project === "photo") {
    photo = photos.photos.find(photo => photo.name === name)
    if(photo)
    return (
      <div className="mb-16">
        <div className="w-screen absolute pl-10 sm:pl-20 md:pl-28 -mt-14 sm:-mt-16">
          <button onClick={handleGoBack} className="flex items-center justify-center gap-0 sm:gap-1 p-0.5 px-3 border-4 border-primary rounded-full">
            <img src="/arrow_left.svg" alt="" className="h-6 sm:h-8 -ml-2"/>
            <p className="max-sm:text-sm">Terugkeren</p>
          </button>
        </div>
        <div className="px-10 sm:px-20 md:px-28 xl:pr-80 mt-20 gap-20 mb-8 2xl:mb-16">
          <div className="flex items-end">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ivyMode overflow-hidden text-black ">{photo.name}</h1>
            <img src="/portfolio_icon_green.svg" alt="" className="h-2.5 sm:h-3 lg:h-4 ml-1.5 max-sm:mb-0.5"/>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-black mt-6">{photo.description}</p>
        </div>
        <Pictures kind="photo" name={photo.name} />
      </div>
    );
  }
};

export default HorizontalDetail;
