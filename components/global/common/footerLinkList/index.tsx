import React from "react";
import FooterLink from "../footerLink";

const FooterLinkList = ({ content }: any) => {
  return (
    <>
      <div className="flex flex-col gap-[10px] justify-start items-start ">
        <div data-aos="fade-in" className="lg:mb-[20px] mb-[10px] text-[14px] sm:text-[16px]">
          {content.title}
        </div>
        {content.bodyText.map((item: any, i: any) => (
          <FooterLink key={i} bodyText={item} />
        ))}
      </div>
    </>
  );
};

export default FooterLinkList;
