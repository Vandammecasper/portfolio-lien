import {ReactNode, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

interface PropsInterface {
  children: ReactNode;
}

const Header = ({children}: PropsInterface) => {

  const navigate = useNavigate(); 
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
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
    <div className={`w-full overflow-x-hidden mb-20`}>
      <div className={`h-20 w-full fixed z-40 bg-primary flex justify-between items-center px-4 sm:px-20 ${showHeader ? 'block' : 'hidden'}`}>
        <button onClick={() => {
                navigate('/');
              }} className="text-xl sm:text-3xl">HOME</button>
        <div className="flex gap-8 sm:gap-12 md:gap-20">
          <button onClick={() => {
                navigate('/design');
              }} className="text-xl sm:text-3xl">DESIGN</button>
          <button onClick={() => {
                navigate('/fotografie');
              }} className="text-xl sm:text-3xl">FOTOGRAFIE</button>
        </div>
      </div>
      <div className="mt-40">
        {children}
      </div>
    </div>
  )
};

export default Header;
