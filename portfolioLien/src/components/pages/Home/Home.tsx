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
      <div className="w-screen h-screen -mt-16 grid justify-items-center text-left">
        <div className="leading-tight place-self-center w-4/5 sm:w-2/3 ml-6 sm:ml-28 lg:ml-64">
          <h1 className="text-primary text-start text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl font-ivyMode font-bold -ml-2 sm:-ml-3">Hello,</h1>
          <TypingAnimation className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-ivyMode font-thin text-start mt-4" text="I AM LIEN VAN DEN ABBEELE"/>
        </div>
        {/* <img src="/double_arrow.svg" alt="" className="absolute bottom-4 animate-bounce place-self-center" /> */}
      </div>
      <img src="/portfolio_icon_green.svg" alt="" className="absolute h-64 sm:h-80 lg:h-96 -ml-24 sm:-ml-32 -mt-28 sm:-mt-44 lg:-mt-52 -z-10" />
      <div className="w-screen bg-primary mt-24 overflow-hidden md:flex md:p-40 px-8 md:pr-12 lg:pr-20 xl:pr-56 py-8 2xl:py-48">
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-7xl 2xl:text-8xl font-ivyMode font-black sm:font-bold md:-rotate-90 text-nowrap z-10 md:-ml-40 lg:-ml-48 xl:-ml-56 2xl:-ml-60">ABOUT ME</h1>
        <div className="md:-ml-80 lg:-ml-56 xl:-ml-40 2xl:-ml-68 2xl:self-center max-md:pb-16">
          <p className="sm:text-lg lg:text-xl 2xl:text-2xl mt-6 lg:-mt-16">I am a 21-year-old <span className="font-bold">cross-media student</span> at Artevelde. I chose the specialisation ‘<span className="font-bold">Photo design</span>’. In this specialisation, we take all the photographs we use in our designs ourselves. The choice of Photo Design was an obvious one for me, as I have always had a strong interest in photography from a young age.</p>
          <p className="sm:text-lg lg:text-xl 2xl:text-2xl mt-3 sm:mt-4 lg:mt-8">In my course, we receive a good variety of assignments. These range from developing an entire advertising campaign to designing a vinyl record. We have learned to work with various programmes, such as <span className="font-bold">Adobe software</span>: Illustrator, Photoshop, Lightroom, and InDesign. For designing websites, we used <span className="font-bold">Figma</span>.</p>
          <p className="sm:text-lg lg:text-xl 2xl:text-2xl mt-3 sm:mt-4 lg:mt-8 max-sm:pr-0 max-lg:pr-24 max-xl:pr-40 max-2xl:pr-40 2xl:pr-44">In my free time, I can often be found with my camera in hand or on the hockey pitch.</p>
        </div>
      <img src="/portfolio_icon_white2.svg" alt="" className="absolute max-sm:h-48 max-lg:h-56 max-xl:h-72 right-0 -mt-20 md:mt-100 lg:mt-64 xl:mt-24 2xl:mt-32"/>
      </div>
      <div className="mt-32 overflow-hidden">
        <h2 className="ml-10 lg:ml-24 text-xl sm:text-4xl max-sm:pr-10 md:text-5xl xl:text-6xl">CURIOUS ABOUT MY WORK?</h2>
        <button onClick={() => {navigate('/design')}} className="flex mt-12 ml-10 items-end">
          <img src="/portfolio_icon_green.svg" alt="" className="h-12 sm:h-16 md:h-20" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-ivyMode max-sm:-mb-0.5 -ml-4 sm:-ml-6 transition ease-in-out delay-100 duration-300 hover:-translate-y-3 hover:sm:-translate-y-4 hover:scale-110 hover:-translate-x-3 hover:sm:-translate-x-4">DESIGN</h3>
        </button>
        <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {designs.designs.map((review) => (
              <ReviewCard key={review.number} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
        <button onClick={() => {navigate('/fotografie')}} className="flex mt-12 ml-10 items-end">
          <img src="/portfolio_icon_green.svg" alt="" className="h-12 sm:h-16 md:h-20" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-ivyMode max-sm:-mb-0.5 -ml-4 sm:-ml-6 transition ease-in-out delay-100 duration-300 hover:-translate-y-4 hover:scale-110 hover:-translate-x-4">FOTOGRAPHY</h3>
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
