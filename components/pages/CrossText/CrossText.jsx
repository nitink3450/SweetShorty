import React, { useEffect, memo } from "react";
import Styles from "./CrossText.module.scss";

const CrossText = () => {
  useEffect(() => {
    function switchLogo() {
      const whiteTextElements = document.querySelectorAll(".whiteText2");
      const stickyBlackTextOffset = document
        .querySelector(".sticky_blackText2")
        .getBoundingClientRect();

      whiteTextElements.forEach(function (whiteTextElement) {
        const assetBoxOffset = whiteTextElement
          .closest(".assetBox2")
          .getBoundingClientRect();
        whiteTextElement.style.top =
          stickyBlackTextOffset.top - assetBoxOffset.top + "px";
        whiteTextElement.style.left =
          stickyBlackTextOffset.left - assetBoxOffset.left + "px";
      });
    }

    function handleScroll() {
      switchLogo();
    }

    switchLogo();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section class={Styles.space_screen}></section>
      <section class={Styles.textCross}>
        <div
          class={`${Styles.commonText} ${Styles.sticky_blackText} sticky_blackText2`}
        >
          Poczuj przepływ sił witalnych
          <br /> Zadbaj o zdrowie i odkryj swoje piękno
        </div>
        <div class={Styles.contentBox}>
          <div class={`${Styles.assetBox} assetBox2`}>
            <div class={`${Styles.commonText} ${Styles.whiteText} whiteText2`}>
              Poczuj przepływ sił witalnych
              <br /> Zadbaj o zdrowie i odkryj swoje piękno
            </div>
            <img src="https://picsum.photos/700/600" />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(CrossText);
