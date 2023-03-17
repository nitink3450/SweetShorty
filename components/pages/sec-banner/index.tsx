import Button from "@/components/global/common/button1";
import Button2 from "@/components/global/common/button2";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-[100%]  lg:gap-[10px] gap-[50px] ">
        <div className="flex flex-col w-[100%] justify-center items-center lg:items-start lg:w-[44%] p-0 md:px-[38px] gap-[30px] ">
          <div className="lg:text-[80px] md:text-[60px] lg:text-start text-center text-[37.6px] font-semibold text-[#232127] tracking-[-3px] leading-[0.9]">
            Shorten your <span className="text-[#7b1fa2]">loooooong</span> URLs
            like never before!
          </div>
          <div className="lg:text-[20px] text-[14.72px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5]">
            {`Build your brand's recognition and get detailed insights on how your links are performing`}
          </div>
          {/* <div className="lg:text-[20px] text-[14.72px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5]">
            copy your long boring url. Paste it Below. Then 💥 You got it right!
          </div> */}
          {/* <Button>Get Started</Button> */}
          <Button2
            mr="group-hover:mr-[30px]"
            ml="ml-[10px]"
            class="lg:p-[11px_33px] p-[8px_20px] lg:text-[20px] text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
          >
            Get Started
          </Button2>
        </div>
        <div  className="h-fit w-fit flex justify-center items-center">
          <Image
            src={"./images/illustration-working.svg"}
            height={816}
            width={816}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
