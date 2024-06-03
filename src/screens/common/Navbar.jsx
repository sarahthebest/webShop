import { useState } from "react";
import menuData from "../../assets/json/submenu.json";
import { BsBag, BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const [subMenuState, setSubMenuState] = useState({
    bestsellers: false,
    rings: false,
    necklaces: false,
    bracelets: false,
    earrings: false,
  });

  let debounceTimeout;

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

  const handleMouseEnter = (menu) => {
    clearTimeout(debounceTimeout);
    toggleVisibility(menu);
  };

  const handleMouseLeave = () => {
    debounceTimeout = setTimeout(() => {
      closeSubMenu();
    }, 10);
  };

  return (
    <div className="nav justify-center border-b-black border bg-slate-100 sticky top-0 z-50">
      <div className="row flex justify-center">
        <img
          src="src/assets/img/logo.webp"
          alt="logo"
          id="logo"
          className="my-2"
        />
      </div>
      <div className="flex-row border-t-black border border-b-0 flex relative justify-between px-1 sm:px-32">
        <ul className="links list-none">
          <div className="menuWrapper flex flex-row gap-5 items-center links">
            {Object.keys(menuData).map((menuKey) => {
              const menu = menuData[menuKey];
              return (
                <li
                  key={menuKey}
                  onMouseEnter={() => handleMouseEnter(menuKey)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="#" className="font-bebas text-2xl">
                    {menu.title}
                  </a>
                  {subMenuState[menuKey] && (
                    <div className="subMenu bg-white border flex flex-row">
                      <ul className="listGrid ps-2 sm:ps-32">
                        <h3 className="col-span-2">Shop by style</h3>
                        {menu.links.map((link, index) => (
                          <li key={index}>
                            <a href="#">{link}</a>
                          </li>
                        ))}
                      </ul>
                      {menu.images.map((image, index) => (
                        <div
                          key={index}
                          className="imgContainer pt-5"
                          style={index > 0 ? { marginLeft: "20px" } : {}}
                        >
                          <img
                            src={image.src}
                            className="object-contain menuIMG"
                            alt={image.alt}
                          />
                          <h4>{image.label}</h4>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </div>
        </ul>
        <div className="icons flex flex-row items-center gap-4">
        <IoPersonOutline />
        <BsSearch />
        <BsBag />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
