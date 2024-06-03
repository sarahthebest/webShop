import Button from "../common/Button";

const Campaign = () => {
    return ( 
        <div
        className="campaign flex sm:flex-row overflow-hidden
      flex-col border-black border-t border-b relative"
      >
        <div className="col2 md:w-1/2 sm:w-full justify-center items-center overflow-hidden">
          <img
            src="src\assets\img\necklace2.webp"
            className="object-cover top-25 right-0"
            id="headerIMG"
            alt="Image displaying beautiful rings."
          />
        </div>
        <div className="col2 md:w-1/2 sm:w-full justify-center items-center overflow-hidden">
          <img
            src="src\assets\img\bracelet2.jpg"
            className="object-cover top-25 right-0"
            id="headerIMG"
            alt="Image displaying beautiful rings."
          />
        </div>
        <div className="absolute flex flex-col bottom-10 w-full gap-3">
          <h2 className="text-6xl text-white font-bebas mx-auto">GIFT GUIDE</h2>
          <Button />
        </div>
      </div>
     );
}
 
export default Campaign;