import { useNavigate } from "react-router-dom";

export const ReviewCard = ({
  roulette,
  name,
  type,
}: {
  roulette: string;
  name: string;
  type: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/detail/${type}/${name}`);
      }}
      className="relative w-80 sm:w-96 h-40 sm:h-48 overflow-hidden bg-black -z-20"
    >
      <img className="w-full h-full absolute -z-10" alt="" src={roulette} />
      <div className="grid place-items-center w-full h-full">
        <div className="bg-black transition ease-in-out delay-50 duration-300 absolute opacity-0 hover:opacity-30 w-full h-full"></div>
        <h3 className="text-white text-3xl sm:text-4xl">{name}</h3>
      </div>
    </button>
  );
};
