export const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
  number: string;
}) => {
  return (
    <figure
      className="relative w-96 h-48 cursor-pointer overflow-hidden bg-black -z-20"
    >
      <img className="w-full h-full absolute -z-10" alt="" src={img} />
      <div className="grid place-items-center w-full h-full">
        <h3 className="text-white text-4xl">{name}</h3>
      </div>
    </figure>
  );
};
