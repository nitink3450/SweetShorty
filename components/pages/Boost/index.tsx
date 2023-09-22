import Button2 from "@/components/global/common/button2";
import React from "react";

const BoostBox = () => {
  return (
    <>
      <div className="box lg:p-[5rem_4rem] p-[3rem_1.5rem] flex justify-center flex-col lg:gap-[60px] gap-[30px] items-center">
        <div
          data-aos="fade-in"
          className="lg:text-[40px] md:text-[20px] text-center text-[25px] font-semibold text-white lg:tracking-[-3px] tracking-[-1px] leading-[0.9] "
        >
          Boost your
          <span className="6xx:text-[#7b1fa2]  text-[#2acfcf] ml-[5px]">
            links
          </span>{" "}
          today
        </div>

        <div data-aos="fade-in">
          <Button2
            mr="group-hover:mr-[30px]"
            ml="ml-[10px]"
            class="lg:p-[11px_33px]  outline outline-[0.1px] outline-[#30C59B] p-[8px_20px] lg:text-[20px] text-[17.37px] focus-within:outline-[#000]"
          >
            Get Started
          </Button2>
        </div>
      </div>
    </>
  );
};

export default BoostBox;
