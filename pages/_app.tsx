import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 0,
      // startEvent: "load",
    });
  }, []);
  return <Component {...pageProps} />;
}
