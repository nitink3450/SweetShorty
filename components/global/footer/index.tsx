import Image from "next/image";
import React from "react";
import FooterLinkList from "../common/footerLinkList";
// import FacebookLogo from "../../../public/icons/icon-facebook.svg";
// import TwitterLogo from "../../../public/icons/icon-twitter.svg";
// import PinterestLogo from "../../../public/icons/icon-pinterest.svg";
// import InstagramLogo from "../../../public/icons/icon-instagram.svg";
import {
  LogoSvg,
  SwenflySvg,
  TwitterLogo,
  FacebookLogo,
  PinterestLogo,
  InstagramLogo,
} from "../common/svgs";
const Footer = () => {
  const textLinks = [
    {
      title: "Features",
      bodyText: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      bodyText: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      bodyText: ["About", "Our Team", "Careers", "Contact"],
    },
  ];
  return (
    <>
      <div className="bg-[#232127] text-white gap-[10px] 11x:gap-0 flex flex-col ">
        <div className="flex flex-col 11x:flex-row w-full 11x:justify-between 11x:p-[50px_150px] p-[30px_10px_0_10px] md:p-[30px]  gap-[20px] 11x:gap-0 items-center 11x:items-start ">
          <div className="cursor-pointer flex gap-[10px]  ">
            {/* <div className="h-[35px] w-[35px] flex justify-center items-center mr-[10px]">
              <Image
                src={"/logo.svg"}
                height={35}
                width={35}
                alt="logo"
                // style={{ filter: "invert(0.5)" }}
              />
            </div> */}
            {/* <div className="h-[35px] w-[125px] flex justify-center items-center">
              <Image
                src={"/icons/swenfly.svg"}
                height={35}
                width={125}
                alt="logo"
                style={{ filter: "invert(1)" }}
              />
            </div> */}
            <LogoSvg
              className="text-[#7b1fa2] transition ease-in-out duration-500  hover:text-[#2BD0D0]"
              height="35px"
              width="35px"
            />
            <SwenflySvg
              className="text-white transition ease-in-out duration-300 hover:text-[#7b1fa2]"
              height="35px"
              width="125px"
            />
          </div>
          <div className="flex flex-row gap-[25px] sm:gap-[60px] justify-between ">
            {textLinks.map((item, index) => {
              return <FooterLinkList key={index} content={item} />;
            })}
          </div>
          <div className="flex flex-row justify-center items-center ">
            <div className="h-fit w-fit flex justify-center items-center">
              <FacebookLogo
                className="text-[#7b1fa2] transition ease-in-out duration-500  hover:text-[#2BD0D0]"
                height="50px"
                width="50px"
              />
              <TwitterLogo
                className="text-[#7b1fa2] transition ease-in-out duration-500  hover:text-[#2BD0D0]"
                height="50px"
                width="50px"
              />
              <PinterestLogo
                className="text-[#7b1fa2] transition ease-in-out duration-500  hover:text-[#2BD0D0]"
                height="50px"
                width="50px"
              />
              <InstagramLogo
                className="text-[#7b1fa2] transition ease-in-out duration-500  hover:text-[#2BD0D0]"
                height="50px"
                width="50px"
              />
            </div>

            {/* {iconLinks.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="h-fit w-fit flex justify-center items-center"
                >
                  <Image
                    src={item}
                    height={50}
                    width={50}
                    alt="logo"
                    style={{ filter: "invert(1)" }}
                  />
                
                </div>
              );
            })} */}
          </div>
        </div>
        <div className="w-full p-[10px] bg-[black] text-center">
          © 2023 All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
