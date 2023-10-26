import React, { useState, useEffect, useContext } from "react";
import { TiThMenu, TiPlus } from "react-icons/ti";
import Button2 from "../common/button2";
import { LogoSvg, SweetShortySvg, SwenflySvg } from "../common/svgs";
import { useMediaQuery } from "../common/UseMediaQuery/UseMediaQuery";
import { Link } from "react-scroll";
import Link1 from "next/link";
import { Links } from "./headerLinks";
import AppContext from "@/context/AppContext";

const Header = () => {
  let [open, setOpen] = useState(false);
  const context = useContext(AppContext);

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    let scrollpos = window.scrollY;

    const header = document.querySelector(`.product_nav`);
    const scrollChange = 48; //146

    const add_class_on_scroll = () => header?.classList.add(`activeHead`);
    const remove_class_on_scroll = () => header?.classList.remove(`activeHead`);

    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });
  });

  const handleMenu = () => {
    setOpen(!open);
    if (!open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "scroll";
    }
  };

  const HandleSignUp = () => {
    context?.setIsSignUp(true);
  };

  const HadleLogin = () => {
    context?.setIsSignUp(false);
  };

  return (
    <>
      {/* shadow-md  */}
      <div className="w-full sticky top-0 left-0 right-0 z-50 9xx:overflow-hidden transition-all ease-in duration-100 ">
        <div
          className={`9xx:flex dark:activeHeadDarkBorder activeHeadLightBorder dark:bg-[#191919] bg-white items-center justify-between product_nav  9xx:px-10 px-4 pb-4 pt-4 9xx:pt-10 z-50 relative transition-all ease-in duration-500`}
        >
          <div className="cursor-pointer gap-[10px] flex items-center">
            {/* <div className="h-[35px] w-[35px] flex justify-center items-center mr-[10px]">
              <Image src={"/logo.svg"} height={35} width={35} alt="logo" />
            </div> */}
            <LogoSvg
              className="text-[#7b1fa2] transition ease-in-out duration-500 hover:text-[#30C59B]"
              height="35px"
              width="35px"
            />
            {/* <SwenflySvg
              className="text-black transition ease-in-out duration-300 hover:text-[#7b1fa2]"
              height="35px"
              width="125px"
            /> */}
            <SweetShortySvg
              className="text-black dark:text-[#7b1fa2] dark:hover:text-[#30C59B] hover:text-[#30C59B] duration-300"
              height="35px"
              width="200px"
            />
            {/* <div className="h-[35px] w-[125px] flex justify-center items-center">
              <Image
                src={"/icons/swenfly.svg"}
                height={35}
                width={125}
                alt="logo"
              />
            </div> */}
          </div>

          <div
            onClick={handleMenu}
            className="text-3xl absolute right-4 top-[18px] cursor-pointer 9xx:hidden "
          >
            {open ? <TiPlus className="rotate-[45deg]" /> : <TiThMenu />}
            {/* {open ? <CgLayoutGrid /> : <CgMenuGridR />} */}
          </div>

          <ul
            className={`9xx:flex 9xx:items-center 9xx:pb-0 pb-12 absolute 9xx:static left-0 w-full 9xx:w-auto 9xx:pl-0 pl-9 transition-all duration-500 ease-in -z-10 dark:bg-[#191919] bg-white ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li key={link.name} className="9xx:ml-8 text-xl 9xx:my-0 my-7">
                <Link
                  activeClass="activeLink"
                  spy
                  hashSpy={true}
                  to={link.link}
                  offset={isMobile ? -40 : -55}
                  className="text-gray-800 dark:text-[#7b1fa2] dark:hover:text-[#30C59B] hover:text-[#30C59B] duration-500"
                >
                  {link.name}
                </Link>

                {/* <a
                  href={link.link}
                  className="text-gray-800 dark:text-[#7b1fa2] dark:hover:text-[#30C59B] hover:text-[#30C59B] duration-500"
                >
                  {link.name}
                </a> */}
              </li>
            ))}
            <div
              className="9xx:ml-[100px] flex
            9xx:flex-row flex-col 9xx:justify-center items-start 9xx:items-center 9xx:gap-0 gap-10"
            >
              <li className="9xx:ml-8 text-xl 9xx:my-0">
                <Link1 href="/login" passHref target="_self">
                  <p
                    onClick={HadleLogin}
                    className="text-gray-800 dark:text-[#7b1fa2] dark:hover:text-[#30C59B] hover:text-[#30C59B] 9xx:mr-8 duration-500"
                  >
                    Login
                  </p>
                </Link1>
              </li>
              {/* <Button>SignUp</Button> */}
              <Link1 href="/login" passHref target="_self">
                <Button2
                  onClick={HandleSignUp}
                  mr="group-hover:mr-[20px]"
                  ml="ml-[3px]"
                  class="lg:p-[6px_18px] p-[8px_20px] lg:text-xl text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                >
                  SignUp
                </Button2>
              </Link1>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
