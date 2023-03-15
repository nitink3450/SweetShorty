import React from "react";

const Button = (props: any) => {
  return (
    <button
      className="bg-[#7b1fa2] text-white w-fit font-[Poppins] py-2 px-6 rounded-full hover:bg-opacity-80 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
