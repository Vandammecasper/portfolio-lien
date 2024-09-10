import {ReactNode} from "react";
import { useNavigate } from "react-router-dom";

interface PropsInterface {
  children: ReactNode;
}

const Header = ({children}: PropsInterface) => {

  const navigate = useNavigate(); 

  return (
    <div className="w-full overflow-x-hidden mb-20">
      <div className="h-20 w-full bg-primary flex justify-between items-center px-20">
        <button onClick={() => {
                navigate('/');
              }} className="text-3xl">HOME</button>
        <div className="flex gap-20">
          <button onClick={() => {
                navigate('/design');
              }} className="text-3xl">DESIGN</button>
          <button onClick={() => {
                navigate('/fotografie');
              }} className="text-3xl">FOTOGRAFIE</button>
        </div>
      </div>
      {children}
    </div>
  )
};

export default Header;
