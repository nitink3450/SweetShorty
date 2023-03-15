import React, { useState } from "react";
import Button from "../common/button";
import { TiThMenu, TiPlus } from "react-icons/ti";
import { CgMenuGridR, CgLayoutGrid } from "react-icons/cg";
import Image from "next/image";
const Header = () => {
  let Links = [
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="cursor-pointer flex items-center "
          >
            <div className="h-[35px] w-[35px] flex justify-center items-center mr-[10px]">
              <Image src={"/logo.svg"} height={35} width={35} alt="logo" />
            </div>
            <div className="h-[35px] w-[125px] flex justify-center items-center">
              <Image
                src={"/icons/swenfly.svg"}
                height={35}
                width={125}
                alt="logo"
              />
            </div>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-[18px] cursor-pointer md:hidden"
          >
            {open ? <TiPlus className="rotate-[45deg]" /> : <TiThMenu />}
            {/* {open ? <CgLayoutGrid /> : <CgMenuGridR />} */}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button>Get Started</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
