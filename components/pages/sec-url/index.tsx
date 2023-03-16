import Button2 from "@/components/global/common/button2";
import React from "react";
import { BiLink } from "react-icons/bi";
const Url = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-[50px] lg:mt-[100px] gap-[5px]">
        <div className="w-full flex justify-center items-center flex-col gap-[5px]">
          <div className="lg:text-[40px] md:text-[20px] lg:text-start text-center text-[25px] font-semibold text-[#232127] lg:tracking-[-3px] tracking-[-1px] leading-[0.9]">
            {`We’ve`}
            <span className="text-[#7b1fa2] ml-[6px]">expanded!</span>
          </div>
          <div className="lg:text-[40px] md:text-[20px] lg:text-start text-center text-[20px] font-semibold text-[#232127] lg:tracking-[-3px] tracking-[-1px] leading-[0.9]">
            <span className="text-[#7b1fa2]">Shorten</span> URLs. Generate{" "}
            <span className="text-[#7b1fa2]">QR</span> Codes.
          </div>
          <div className="lg:text-[20px] text-[14.72px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5] mt-[5px] lg:mt-[10px]">
            copy your long boring url. Paste it Below. Then 💥 You got it right!
          </div>
        </div>
        <div className="w-full mt-[30px] flex justify-center items-center 2xl:w-[1240px] 2xl:h-[90px] gap-[30px] 2xl:gap-[50px] flex-col 2xl:flex-row">
          <div className="input-container w-[90%] hover:w-[98%] lg:w-[900px] lg:hover:w-[930px]">
            <input
              type="text"
              name="text"
              className="input hidden md:flex text-[17.37px] lg:text-[25px] hover:w-[98%] lg:hover:w-[930px]"
              placeholder="Paste long url and shorten it..."
            />
            <input
              type="text"
              name="text"
              className="input flex md:hidden text-[17.37px] lg:text-[25px] hover:w-[98%] lg:hover:w-[930px]"
              placeholder="Paste long url..."
            />
            <span className="icon text-[30px] text-white">
              <BiLink />
            </span>
          </div>
          <Button2
            mr="group-hover:mr-[30px]"
            ml="ml-[30px]"
            class="lg:p-[11px_33px] p-[8px_20px] lg:text-[25px] text-[17.37px]"
          >
            Shorten
          </Button2>
        </div>
        <div className="lg:text-[14px] text-[10px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5] mt-[10px] lg:mt-[10px]">
          URL Shortener → By using our service you accept the{" "}
          <span className="text-[#1e5af9]">Terms of service</span> and{" "}
          <span className="text-[#1e5af9]">Privacy.</span>
        </div>
      </div>
    </>
  );
};

export default Url;
