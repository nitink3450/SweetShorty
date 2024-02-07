import React, { useState } from "react";

const HoverCards = () => {
  const [activeCard, setActiveCard] = useState(1);

  const toggleCard = (index: any) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardsData = [
    {
      title: "Branding Design 1",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
      title: "Branding Design 2",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
      title: "Branding Design 3",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
      title: "Branding Design 4",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
      title: "Branding Design 5",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
      title: "Branding Design 6",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
  ];

  return (
    <>
      <section id="content" className="bg-white">
        <div className="cards">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`card bg-black p-[60px_60px_40px_60px] flex flex-col justify-between ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="contentWrap ">
                <div className="bar">
                  <div
                    className={`number text-[60px] font-normal tracking-[-5px] text-left ${
                      activeCard !== index ? "rotate" : ""
                    }`}
                  >
                    {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                  </div>
                  <span className="title relative">
                    <p className="absolute right-0 font-normal tracking-[-5px] text-left">
                      {card.title}
                    </p>
                  </span>
                </div>
                {activeCard === index && (
                  <>
                    <div className="Desc text-[22px]  font-normal leading-[30px] tracking-normal text-left">
                      {card.desc}
                    </div>
                    <div className=" link text-[18px] font-normal leading-[28px] tracking-normal text-left flex justify-end items-center gap-4">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                      >
                        <rect
                          width="50"
                          height="50"
                          rx="25"
                          transform="matrix(1 1.74846e-07 1.74846e-07 -1 0.976562 50.21)"
                          fill="white"
                        />
                        <path
                          d="M32.2182 19.9684C32.2182 19.4161 31.7704 18.9684 31.2182 18.9684L22.2182 18.9684C21.6659 18.9684 21.2182 19.4161 21.2182 19.9684C21.2182 20.5207 21.6659 20.9684 22.2182 20.9684L30.2182 20.9684L30.2182 28.9684C30.2182 29.5207 30.6659 29.9684 31.2182 29.9684C31.7704 29.9684 32.2182 29.5207 32.2182 28.9684L32.2182 19.9684ZM21.0382 31.5626L31.9253 20.6755L30.511 19.2613L19.6239 30.1484L21.0382 31.5626Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HoverCards;
