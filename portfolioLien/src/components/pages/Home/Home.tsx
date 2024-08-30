import Header from "../../basics/Header/Header";
import Marquee from "../../basics/Marquee/Marquee";
import { ReviewCard } from "../../basics/Reviewcard/ReviewCard";

const designs = [
  {
    key: "1",
    name: "FILMPOSTER",
    img: "/filmposter.png",
  },
  {
    key: "2",
    name: "LOGO",
    img: "/logo.png",
  },
];

const photos = [
  {
    key: "1",
    name: "COMPOSITIE EITJES",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    key: "2",
    name: "stoel",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    key: "3",
    name: "mandarijn",
    img: "https://avatar.vercel.sh/john",
  },
  {
    key: "4",
    name: "eitjes",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    key: "5",
    name: "stoel",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    key: "6",
    name: "mandarijn",
    img: "https://avatar.vercel.sh/james",
  },
];

const Home = () => {
  return (
    <Header>
      <div className="w-screen h-screen -mt-20 grid justify-items-center text-left">
        <div className="leading-tight place-self-center">
          <h1 className="text-primary text-11xl font-ivyMode font-bold">Hallo,</h1>
          <h2 className="text-5xl font-ivyMode">IK BEN LIEN VAN DEN ABBEELE</h2>
        </div>
        <img src="/double_arrow.svg" alt="" className="absolute bottom-4 animate-bounce" />
      </div>
      <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-32 -mt-52" />
      <div className="w-screen h-screen bg-primary mt-24 overflow-hidden flex p-40 pr-56">
        <h1 className="text-white text-10xl font-ivyMode font-bold -rotate-90 text-nowrap -ml-64">Over mij</h1>
        <div className="-ml-40">
          <p className="text-xl -mt-16">Ik ben een <span className="font-bold">21 jarige cross-media studente</span> aan de Arteveldehogeschool. Ik koos voor de afstudeerrichting ‘<span className="font-bold">Photo design</span>’. In deze afstudeerrichting fotograferen wij zelf alle foto’s die we in onze ontwerpen gebruiken. De keuze voor Photo design was voor mij vanzelfsprekend, omdat ik sinds jongs af aan altijd al een grote interesse heb gehad voor fotografie.</p>
          <p className="text-xl mt-8">In mijn opleiding krijgen we een goede variatie aan opdrachten. Dit gaat van het uitwerken van een hele reclamecampagne tot het ontwerpen van een vinyl plaat. We hebben leren werken met verschillende programma’s zoals de adobe software: Illustrator, Photoshop, Lightroom en InDesign. Voor het designen van websites gebruikten we <span className="font-bold">Figma en Webflow</span>.</p>
          <p className="text-xl mt-8 pr-40">In mijn vrije tijd ben ik ook vaak te vinden met mijn camera in de hand of op het hockeyveld. Momenteel ben ik bezig aan mijn derde jaar als hockeyspeler en mijn eerste jaar bij de eerste dames ploeg van Lokeren.</p>
          <p className="text-xl mt-8 pr-40">Ik hoop om een leerrijke stage te vinden waar ik mezelf verder kan ontwikkelen, hopelijk tot snel!</p>
        </div>
      <img src="/portfolio_icon_white2.svg" alt="" className="absolute right-0 mt-32"/>
      </div>
      <div className="mt-32 overflow-hidden">
        <h2 className="ml-24 text-6xl">BENIEUWD NAAR MIJN WERK?</h2>
        <div className="flex mt-12 ml-10 items-end">
          <img src="/portfolio_icon_green.svg" alt="" />
          <h3 className="text-3xl font-ivyMode -ml-6">DESIGN</h3>
        </div>
        <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {designs.map((review) => (
              <ReviewCard key={review.key} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
        <div className="flex mt-12 ml-10 items-end">
          <img src="/portfolio_icon_green.svg" alt="" />
          <h3 className="text-3xl font-ivyMode -ml-6">FOTOGRAFIE</h3>
        </div>
        {/* <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {photos.map((review) => (
              <ReviewCard key={review.key} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div> */}
      </div>
    </Header>  
  )
};

export default Home;
