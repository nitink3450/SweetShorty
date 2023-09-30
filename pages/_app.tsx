import "@/styles/globals.css";
import "@/styles/login.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: -100,
      // startEvent: "load",
    });
  }, []);
  return (
    <>
      <ThemeProvider attribute="class">
        <AnimatedCursor
          innerSize={20}
          outerSize={30}
          color="48,197,155"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          // clickables={[
          //   "a",
          //   'input[type="text"]',
          //   'input[type="email"]',
          //   'input[type="number"]',
          //   'input[type="submit"]',
          //   'input[type="image"]',
          //   "label[for]",
          //   "select",
          //   "textarea",
          //   "button",
          //   ".link",
          // ]}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
