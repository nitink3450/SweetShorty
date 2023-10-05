import Button from "@/components/global/common/button1";
import Button2 from "@/components/global/common/button2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";

const Banner = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-[100%] lg:gap-[10px] gap-[50px] ">
        <div className="flex flex-col w-[100%] justify-center items-center lg:items-start lg:w-[44%] p-0 md:px-[38px] gap-[30px] ">
          <div
            data-aos="fade-in"
            className="lg:text-[80px] md:text-[60px] lg:text-start text-center text-[37.6px] font-semibold dark:text-white text-[#232127] tracking-[-3px] leading-[0.9]"
          >
            <span className="reflect">Shorten your</span>
            {/* <span className="text-[#7b1fa2] hover:text-[#30C59B]">
              loooooong
            </span>{" "} */}
            <span className="drop-main bounce reflect text-[#7b1fa2] hover:text-[#30C59B] justify-center md:justify-start">
              <div className="letter d">l</div>
              <div className="letter o1">o</div>
              <div className="letter o2">o</div>
              <div className="letter o3">o</div>
              <div className="letter o4">o</div>
              <div className="letter o5">o</div>
              <div className="letter o6">o</div>
              <div className="letter n">n</div>
              <div className="letter g">g</div>
            </span>
            <span className="reflect">URLs like never</span>
            <span className="reflect">before!</span>
          </div>
          <div
            data-aos="fade-in"
            className="lg:text-[20px] text-[14.72px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5]"
          >
            {`Build your brand's recognition and get detailed insights on how your links are performing`}
          </div>
          {/* <div className="lg:text-[20px] text-[14.72px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5]">
            copy your long boring url. Paste it Below. Then 💥 You got it right!
          </div> */}
          {/* <Button>Get Started</Button> */}

          <div data-aos="fade-in">
            <a href="#service">
              <Button2
                mr="group-hover:mr-[30px]"
                ml="ml-[10px]"
                class="lg:p-[11px_33px] p-[8px_20px] lg:text-[20px] text-[17.37px] "
              >
                Get Started
              </Button2>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-in"
          className="h-fit w-fit flex justify-center items-center overflow-hidden banner_wrapper"
        >
          <Tilt className="track-on-window" trackOnWindow={true}>
            <Image
              // src={"/images/illustration-working.svg"}
              // src={"/images/banner_1.svg"}
              // src={"/images/banner_2.svg"}
              src={"/images/banner_1_css.svg"}
              height={816}
              width={816}
              alt="logo"
            />
          </Tilt>
          {/* <object
            id="animated-svg"
            type="image/svg+xml"
            // height={816}
            className="w-[100%] md:w-[816px]"
            data="/images/banner_1_animated.svg"
          ></object> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
