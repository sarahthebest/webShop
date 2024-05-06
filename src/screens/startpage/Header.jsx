const Header = () => {
  return (
    <div
      className="header flex sm:flex-row overflow-hidden border-b border-black
    flex-col"
    >
      <div className="col2 md:w-1/2 sm:w-full justify-center items-center overflow-hidden">
        <img
          src="src\assets\img\headerIMG.jpg"
          className="object-cover top-25 right-0"
          id="headerIMG"
          alt="Image displaying beautiful rings."
        />
      </div>
      <div className="md:border-l md:w-1/2 sm:w-full py-10 
       flex flex-col justify-center items-center col1 gap-3  border-black">
        <h2 className="text-2xl">Find your style</h2>
        <h3>Buy 2 get 1 limited time only while stocks lasts!</h3>
        <button className="btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Header;
