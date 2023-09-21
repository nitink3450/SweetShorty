import React, { useState } from "react";
import Button from "../common/button1";
import { TiThMenu, TiPlus } from "react-icons/ti";
import { CgMenuGridR, CgLayoutGrid } from "react-icons/cg";
import Image from "next/image";
import Button2 from "../common/button2";
import { LogoSvg, SweetShortySvg, SwenflySvg } from "../common/svgs";
const Header = () => {
  let Links = [
    { name: "Service", link: "#service" },
    { name: "About", link: "#about" },
    { name: "Contact Us", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      {/* shadow-md  */}
      <div className="w-full sticky top-0 left-0 right-0 z-50">
        <div className="9xx:flex items-center justify-between bg-white py-4 9xx:px-10 px-4">
          <div
            data-aos="fade-in"
            className="cursor-pointer gap-[10px] flex items-center"
          >
            {/* <div className="h-[35px] w-[35px] flex justify-center items-center mr-[10px]">
              <Image src={"/logo.svg"} height={35} width={35} alt="logo" />
            </div> */}
            <LogoSvg
              className="text-[#7b1fa2] transition ease-in-out duration-500  hover:text-[#2BD0D0]"
              height="35px"
              width="35px"
            />
            {/* <SwenflySvg
              className="text-black transition ease-in-out duration-300 hover:text-[#7b1fa2]"
              height="35px"
              width="125px"
            /> */}
            <SweetShortySvg
              className="text-black transition ease-in-out duration-300 hover:text-[#7b1fa2]"
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
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-4 top-[18px] cursor-pointer 9xx:hidden"
          >
            {open ? <TiPlus className="rotate-[45deg]" /> : <TiThMenu />}
            {/* {open ? <CgLayoutGrid /> : <CgMenuGridR />} */}
          </div>

          <ul
            className={`9xx:flex 9xx:items-center 9xx:pb-0 pb-12 absolute 9xx:static bg-white 9xx:z-auto z-[-1] left-0 w-full 9xx:w-auto 9xx:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                data-aos="fade-in"
                key={link.name}
                className="9xx:ml-8 text-xl 9xx:my-0 my-7"
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div
              className="9xx:ml-[100px] flex
            9xx:flex-row flex-col 9xx:justify-center items-start 9xx:items-center 9xx:gap-0 gap-10"
            >
              <li data-aos="fade-in" className="9xx:ml-8 text-xl 9xx:my-0">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-400 9xx:mr-8 duration-500"
                >
                  Login
                </a>
              </li>
              {/* <Button>SignUp</Button> */}
              <Button2
                mr="group-hover:mr-[20px]"
                ml="ml-[3px]"
                class="lg:p-[6px_18px] p-[8px_20px] lg:text-xl text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
              >
                SignUp
              </Button2>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
