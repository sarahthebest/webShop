const Navbar = () => {
  return (
    <>
      <div className="nav grid-cols-6 grid-rows-2 justify-center bg-slate-100 sticky top-0">
        <div className="row flex justify-center">
          <img
            src="src\assets\img\logo.webp"
            alt="logo"
            id="logo"
            className="my-2"
          />
        </div>
        <div className="row flex">
          <ul className="links list-none flex flex-row gap-5 justify-center items-center border-2">
          <li className="hover:scale-110">
              <a href="">Bestsellers</a>
            </li>
            <li className="hover:scale-110">
              <a href="">Rings</a>
            </li>
            <li className="hover:scale-110">
              <a href="">Necklaces</a>
            </li>
            <li className="hover:scale-110">
              <a href="">Bracelets</a>
            </li>
            <li className="hover:scale-110">
              <a href="">Earrings</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
