import React from "react";

const FooterLink = ({ bodyText }: any) => {
  return (
    <button data-aos="fade-in" className="hover:text-[#2BD0D0] text-[#D3D3D3]   font-normal text-left px-0 text-[12px] sm:text-[16px]">
      {bodyText}
    </button>
  );
};

export default FooterLink;
