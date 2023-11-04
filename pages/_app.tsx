import "@/styles/globals.css";
import "@/styles/login.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import AnimatedCursor from "react-animated-cursor";
import ThemeToggle from "@/components/pages/DarkMode";
import AppContext from "@/context/AppContext";
import Loading from "@/components/global/common/Loader/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkModeOn, setIsDarkModeOn] = useState();
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

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
      {!loading ? (
        <>
          <ThemeProvider attribute="class">
            <AppContext.Provider value={{ isSignUp, setIsSignUp }}>
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
              <ThemeToggle
                isDarkModeOn={isDarkModeOn}
                setIsDarkModeOn={setIsDarkModeOn}
              />
              <Component {...pageProps} isDarkModeOn={isDarkModeOn} />
            </AppContext.Provider>
          </ThemeProvider>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
