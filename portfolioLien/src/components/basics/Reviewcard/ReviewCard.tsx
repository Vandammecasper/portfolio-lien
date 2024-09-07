import { useNavigate } from "react-router-dom";

export const ReviewCard = ({
  roulette,
  name,
  align,
  type,
}: {
  roulette: string;
  name: string;
  align: string;
  type: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/detail/${type}/${align}/${name}`);
      }}
      className="relative w-96 h-48 overflow-hidden bg-black -z-20"
    >
      <img className="w-full h-full absolute -z-10" alt="" src={roulette} />
      <div className="grid place-items-center w-full h-full">
        <h3 className="text-white text-4xl">{name}</h3>
      </div>
    </button>
  );
};
