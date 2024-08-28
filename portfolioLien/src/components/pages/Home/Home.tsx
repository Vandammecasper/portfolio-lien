import Header from "../../basics/Header/Header";

const Home = () => {
  return (
    <Header>
      <div className="w-screen h-screen -mt-20 grid justify-items-center text-left">
        <div className="leading-tight place-self-center">
          <h1 className="text-primary text-10xl font-ivyMode">Hallo,</h1>
          <h2 className="text-5xl font-ivyMode">IK BEN LIEN VAN DEN ABBEELE</h2>
        </div>
        <img src="/double_arrow.svg" alt="" className="absolute bottom-4 animate-bounce" />
      </div>
      <img src="/portfolio_icon_green.svg" alt="" className="absolute h-96 -ml-32 -mt-52" />
      <div className="w-screen h-screen bg-primary mt-24">

      </div>
    </Header>  
  )
};

export default Home;
