import Header from "../../basics/Header/Header";

const Home = () => {
  return (
    <Header>
      <div className="w-screen h-screen -mt-24 grid justify-items-center text-left">
        <div className="leading-tight place-self-center">
          <h1 className="text-primary text-10xl font-ivyMode">Hallo,</h1>
          <h2 className="text-5xl font-ivyMode">IK BEN LIEN VAN DEN ABBEELE</h2>
        </div>
        <img src="/double_arrow.svg" alt="" className="fixed bottom-4 animate-bounce" />
      </div>
    </Header>  
  )
};

export default Home;
