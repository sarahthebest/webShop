import { useState } from "react";

const Navbar = () => {
  const [subMenuState, setSubMenuState] = useState({
    bestsellers: false,
    rings: false,
    necklaces: false,
    bracelets: false,
    earrings: false,
  });

  const toggleVisibility = (menu) => {
    setSubMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const closeSubMenu = () => {
    setSubMenuState({
      bestsellers: false,
      rings: false,
      necklaces: false,
      bracelets: false,
      earrings: false,
    });
  };

  return (
    <>
      <div className="nav grid-cols-6 grid-rows-2 justify-center bg-rose-400 sticky top-0">
        <div className="row flex justify-center relative">
          <img
            src="src\assets\img\logo.webp"
            alt="logo"
            id="logo"
            className="my-2"
          />
        </div>
        <div className="row flex relative">
          <ul className="links list-none border-t border-b border-black">
            <div className="menuWrapper flex flex-row gap-5 justify-center items-center links">
              <li>
                <a href="#" onMouseEnter={() => toggleVisibility("rings")}>
                  Rings
                </a>
                {subMenuState.rings && (
                  <div
                    className="subMenu bg-white border flex flex-row border-t-black"
                    onMouseLeave={closeSubMenu}
                  >
                    <ul className="listGrid">
                      <h3 className="col-span-2">Shop by style</h3>
                      <li>
                        <a href="#">Engagement Rings</a>
                      </li>
                      <li>
                        <a href="#">Mens Rings</a>
                      </li>
                      <li>
                        <a href="#">Stackable Rings</a>
                      </li>
                      <li>
                        <a href="#">Signet Rings</a>
                      </li>
                      <li>
                        <a href="#">Gemstone Rings</a>
                      </li>
                      <li>
                        <a href="#">Candy Rings</a>
                      </li>
                    </ul>
                    <div className="imgContainer pt-5 ms-30">
                      <img
                        src="src\assets\img\ring1.webp"
                        className="object-cover menuIMG"
                        alt="Beautiful ring."
                      />
                      <h4>Golden Rings</h4>
                    </div>
                    <div
                      className="imgContainer pt-5"
                      style={{ marginLeft: "20px" }}
                    >
                      <img
                        src="src\assets\img\ring2.webp"
                        className="object-cover menuIMG"
                        alt="Beautiful ring."
                      />
                      <h4>Ring Inspiration</h4>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="#" onMouseEnter={() => toggleVisibility("necklaces")}>
                  Necklaces
                </a>
                {subMenuState.necklaces && (
                  <div
                    className="subMenu bg-white border flex flex-row border-t-black"
                    onMouseLeave={closeSubMenu}
                  >
                    <ul className="listGrid">
                      <h3 className="col-span-2">Shop by style</h3>
                      <li>
                        <a href="#">Pendant Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Mens Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Chain Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Zodiac Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Gemstone Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Name Necklaces</a>
                      </li>
                    </ul>
                    <div className="imgContainer pt-5 ms-30">
                      <img
                        src="src\assets\img\necklace1.webp"
                        className="object-cover menuIMG"
                        alt="Beautiful necklace."
                      />
                      <h4>Customized Gifts</h4>
                    </div>
                    <div
                      className="imgContainer pt-5"
                      style={{ marginLeft: "20px" }}
                    >
                      <img
                        src="src\assets\img\necklace2.webp"
                        className="object-cover menuIMG"
                        alt="Beautiful necklace."
                      />
                      <h4>Mothers day gifts</h4>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="#">Bracelets</a>
              </li>
              <li>
                <a href="#">Earrings</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
