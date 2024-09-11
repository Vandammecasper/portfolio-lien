import { useNavigate } from "react-router-dom";
import Header from "../../basics/Header/Header";
import Marquee from "../../basics/Marquee/Marquee";
import { ReviewCard } from "../../basics/Reviewcard/ReviewCard";
import designs from "../../../utils/data/designs.json";
import photos from "../../../utils/data/photos.json";
import TypingAnimation from "../../basics/TypingAnimation/TypingAnimation";

const Home = () => {

  const navigate = useNavigate();

  return (
    <Header>
      <div className="w-screen h-screen -mt-20 grid justify-items-center text-left">
        <div className="leading-tight place-self-center w-4/5 sm:w-2/3 ml-6 sm:ml-28 lg:ml-64">
          <h1 className="text-primary text-start text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl font-ivyMode font-bold -ml-2 sm:-ml-3">Hallo,</h1>
          <TypingAnimation className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-ivyMode font-thin text-start" text="IK BEN LIEN VAN DEN ABBEELE"/>
        </div>
        <img src="/double_arrow.svg" alt="" className="absolute bottom-4 animate-bounce justify-self-center" />
      </div>
      <img src="/portfolio_icon_green.svg" alt="" className="absolute h-64 sm:h-80 lg:h-96 -ml-24 sm:-ml-32 -mt-28 sm:-mt-44 lg:-mt-52" />
      <div className="w-screen h-screen bg-primary mt-24 overflow-hidden flex p-40 pr-56">
        <h1 className="text-white text-10xl 2xl:text-11xl font-ivyMode font-bold -rotate-90 text-nowrap -ml-64 2xl:-ml-60">Over mij</h1>
        <div className="-ml-40 2xl:-ml-72 2xl:self-center">
          <p className="text-xl 2xl:text-2xl -mt-16">Ik ben een 21 jarige <span className="font-bold">cross-media studente</span> aan de Arteveldehogeschool. Ik koos voor de afstudeerrichting ‘<span className="font-bold">Photo design</span>’. In deze afstudeerrichting fotograferen wij zelf alle foto’s die we in onze ontwerpen gebruiken. De keuze voor Photo design was voor mij vanzelfsprekend, omdat ik sinds jongs af aan altijd al een grote interesse heb gehad voor fotografie.</p>
          <p className="text-xl 2xl:text-2xl mt-8">In mijn opleiding krijgen we een goede variatie aan opdrachten. Dit gaat van het uitwerken van een hele reclamecampagne tot het ontwerpen van een vinyl plaat. We hebben leren werken met verschillende programma’s zoals de <span className="font-bold">adobe software</span>: Illustrator, Photoshop, Lightroom en InDesign. Voor het designen van websites gebruikten we <span className="font-bold">Figma en Webflow</span>.</p>
          <p className="text-xl 2xl:text-2xl mt-8 max-2xl:pr-40 2xl:pr-44">In mijn vrije tijd ben ik ook vaak te vinden met mijn camera in de hand of op het hockeyveld. Momenteel ben ik bezig aan mijn derde jaar als hockeyspeler en mijn eerste jaar bij de eerste dames ploeg van Lokeren.</p>
          <p className="text-xl 2xl:text-2xl mt-8 pr-40 2xl:pr-48">Ik hoop om een leerrijke stage te vinden waar ik mezelf verder kan ontwikkelen, hopelijk tot snel!</p>
        </div>
      <img src="/portfolio_icon_white2.svg" alt="" className="absolute right-0 mt-32 2xl:mt-80"/>
      </div>
      <div className="mt-32 overflow-hidden">
        <h2 className="ml-24 text-6xl">BENIEUWD NAAR MIJN WERK?</h2>
        <button onClick={() => {navigate('/design')}} className="flex mt-12 ml-10 items-end">
          <img src="/portfolio_icon_green.svg" alt="" />
          <h3 className="text-3xl font-ivyMode -ml-6 transition ease-in-out delay-100 duration-300 hover:-translate-y-4 hover:scale-110 hover:-translate-x-4">DESIGN</h3>
        </button>
        <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {designs.designs.map((review) => (
              <ReviewCard key={review.number} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
        <button onClick={() => {navigate('/fotografie')}} className="flex mt-12 ml-10 items-end">
          <img src="/portfolio_icon_green.svg" alt="" />
          <h3 className="text-3xl font-ivyMode -ml-6 transition ease-in-out delay-100 duration-300 hover:-translate-y-4 hover:scale-110 hover:-translate-x-3">FOTOGRAFIE</h3>
        </button>
        <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {photos.photos.map((review) => (
              <ReviewCard key={review.number} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
      </div>
    </Header>  
  )
};

export default Home;
