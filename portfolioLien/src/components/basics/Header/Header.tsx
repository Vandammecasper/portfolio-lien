import {ReactNode, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Dock, DockIcon } from "../Docking/Docking";

interface PropsInterface {
  children: ReactNode;
}

const Header = ({children}: PropsInterface) => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`w-full overflow-x-hidden flex flex-col z-40`}>
      <div className="hidden sm:block fixed self-center z-40">
        <Dock direction="middle" className="px-4 gap-4 pr-14">
          <DockIcon>
            <button onClick={() => navigate('/')}>HOME</button>
          </DockIcon>
          <DockIcon>
            <button onClick={() => navigate('/design')}>DESIGN</button>
          </DockIcon>
          <DockIcon>
            <button className="ml-9" onClick={() => navigate('/fotografie')}>FOTOGRAFIE</button>
          </DockIcon>
        </Dock>
      </div>
      <div className={`sm:hidden w-screen fixed flex justify-between px-8 py-5 bg-white shadow-lg z-10 ${showHeader ? 'block' : 'hidden'}`}>
        <h1 onClick={() => navigate('/')} className="text-xl font-ivyMode">HOME</h1>
        <button onClick={toggleMenu}>
          <img src="/menu.svg" alt="" />
        </button>
      </div>
      <div className={`pt-10 h-screen w-screen flex flex-col gap-12 items-center justify-center fixed bg-primary z-50 transition ease-in-out delay-100 duration-700 ${menuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <img onClick={toggleMenu} src="/close.svg" alt="" className="absolute top-8 right-8 h-12"/>
        <button onClick={() => {navigate('/'); toggleMenu()}} className={`text-4xl font-ivyMode font-bold text-white ${menuOpen ? 'opacity-100 -translate-y-8' : 'opacity-0 translate-y-0'} transition duration-200 ease-in-out delay-500`}>HOME</button>
        <button onClick={() => {navigate('/design'); toggleMenu()}} className={`text-4xl font-ivyMode font-bold text-white ${menuOpen ? 'opacity-100 -translate-y-8' : 'opacity-0 translate-y-0'} transition duration-200 ease-in-out delay-700`}>DESIGN</button>
        <button onClick={() => {navigate('/fotografie'); toggleMenu()}} className={`text-4xl font-ivyMode font-bold text-white ${menuOpen ? 'opacity-100 -translate-y-8' : 'opacity-0 translate-y-0'} transition duration-200 ease-in-out delay-1000`}>FOTOGRAFIE</button>
      </div>
      <div className="mt-16 mb-16">
        {children}
      </div>
    </div>
  )
};

export default Header;
