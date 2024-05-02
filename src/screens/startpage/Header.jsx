const Header = () => {
  return (
    <>
<div className="header grid grid-cols-2 grid-row-1 overflow-hidden border-b border-black">
        <div className="col1 gap-3 flex flex-col justify-center items-center border-r border-black">
          <h2 className="text-2xl">Find your style</h2>
          <h3>Buy 2 get 1 limited time only while stocks lasts!</h3>
          <button className="btn">SHOP NOW</button>
        </div>
        <div className="col2 flex flex-row justify-center items-center overflow-hidden">

          <img
            src="src\assets\img\headerIMG.jpg"
            className="object-cover top-25 right-0"
            id="headerIMG"
            alt="Image displaying beautiful rings."
          />
        </div>
      </div>
    </>
  );
};

export default Header;
