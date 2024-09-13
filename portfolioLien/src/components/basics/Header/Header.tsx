import {ReactNode} from "react";
import { useNavigate } from "react-router-dom";
import { Dock, DockIcon } from "../Docking/Docking";

interface PropsInterface {
  children: ReactNode;
}

const Header = ({children}: PropsInterface) => {

  const navigate = useNavigate();

  return (
    <div className={`w-full overflow-x-hidden flex flex-col`}>
      <div className="fixed self-center">
        <Dock direction="middle" className="px-4 gap-4">
          <DockIcon>
            <button onClick={() => navigate('/')}>HOME</button>
          </DockIcon>
          <DockIcon>
            <button onClick={() => navigate('/design')}>DESIGN</button>
          </DockIcon>
          <DockIcon>
            <button onClick={() => navigate('/fotografie')}>FOTOGRAFIE</button>
          </DockIcon>
        </Dock>
      </div>
      <div className="mt-16">
        {children}
      </div>
    </div>
  )
};

export default Header;
