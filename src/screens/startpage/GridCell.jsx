
const GridCell = ({ name, image, hoverImg }) => {
  return (
    <div className="gridCell relative flex flex-col overflow-hidden group border-b-black border border-t-0">
      <img
        className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        src={hoverImg}
        alt={name}
      />
      <img
        className="w-full h-full transition-opacity duration-300 group-hover:opacity-0"
        src={image}
        alt={name}
      />
      <div className="absolute bottom-0 w-full">
        <h1 className="relative ps-4 font-bebas text-xl py-2 z-10 group-hover:text-white">
          {name}
          <span className="absolute inset-0 bg-black/80 transition-transform text-bg
           duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
        </h1>
      </div>
    </div>
  );
};

export default GridCell;