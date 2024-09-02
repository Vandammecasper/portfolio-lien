import { useLocation } from "react-router-dom";
import Header from "../../basics/Header/Header";

const Projecten = () => {
  const location = useLocation();
  const title = location.pathname === "/design" ? "DESIGN" : "FOTOGRAFIE";
  
  const designs = [
    {
      number: "1",
      name: "FILMPOSTER",
      img: "/filmposter_design.png",
    },
    {
      number: "2",
      name: "LOGO",
      img: "/logo_design.png",
    },
    {
      number: "3",
      name: "VINYL",
      img: "/tbd.png",
    },
    {
      number: "4",
      name: "PROGRAMMABOEKJE",
      img: "/tbd.png",
    },
    {
      number: "5",
      name: "CAMPAGNEBEELD",
      img: "/tbd.png",
    },
    {
      number: "6",
      name: "BOEKCOVERS",
      img: "/tbd.png",
    },
  ]
  
  const photos = [
    {
      number: "1",
      name: "BARCELONA",
      img: "/tbd.png",
    },
    {
      number: "2",
      name: "PORTRETTEN",
      img: "/tbd.png",
    },
    {
      number: "3",
      name: "DAGBOEKNOTITIES",
      img: "/tbd.png",
    },
    {
      number: "4",
      name: "STOEL UIT HABITAT",
      img: "/tbd.png",
    },
    {
      number: "5",
      name: "STUDIOPORTRET",
      img: "/tbd.png",
    },
    {
      number: "6",
      name: "COMPOSITIE EITJES",
      img: "/eitjes_fotografie.png",
    }
  ]


  if(title === "DESIGN"){
    return (
      <Header>
        <h1 className="text-6xl font-ivyMode font-bold text-black mt-20 ml-20">DESIGN</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid grid-cols-3 mx-20 mt-20 gap-10">
          {designs.map((design) => (
            <div
              key={design.number}
              className="relative w-96 h-96 cursor-pointer overflow-hidden bg-black -z-20"
            >
              <img className="w-full h-full absolute -z-10" alt="" src={design.img} />
              <div className="grid place-items-center w-full h-full">
                <h3 className="text-white text-4xl">{design.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Header>
    );
  } else if (title === "FOTOGRAFIE") {
    return (
      <Header>
        <h1 className="text-6xl font-ivyMode font-bold text-black mt-20 ml-20">FOTOGRAFIE</h1>
        <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-40 mt-64 -z-20"/>
        <div className="grid grid-cols-3 mx-20 mt-20 gap-10">
          {photos.map((photo) => (
            <div
              key={photo.number}
              className="relative w-96 h-96 cursor-pointer overflow-hidden bg-black -z-20"
            >
              <img className="w-full h-full absolute -z-10" alt="" src={photo.img} />
              <div className="grid place-items-center w-full h-full">
                <h3 className="text-white text-4xl">{photo.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Header>
    );
  }
};

export default Projecten;
