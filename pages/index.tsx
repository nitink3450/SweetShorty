import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Banner from "@/components/pages/Banner";
import BoostBox from "@/components/pages/Boost";
import ContactUs from "@/components/pages/Contact";
import ThemeToggle from "@/components/pages/DarkMode";
import Url from "@/components/pages/Url";
import Head from "next/head";

import React, { useState } from "react";

export default function Home({isDarkModeOn}:any) {

  return (
    <>
      <Head>
        <title>SweetShorty - Shorten and Track Your Links</title>
        <meta
          name="description"
          content="SweetShorty is a free URL shortener that helps you shorten long links and track their performance. Improve your efficiency and share smarter links with SweetShorty. Generate QR codes for your links too!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.svg" />
      </Head>

      <main className="relative z-[2] dark:bg-[#191919] bg-white transition-all ease-in duration-500">
        <Header />
        
        <section id="about" className="p-[10px] md:p-[24px] overflow-hidden">
          <Banner />
        </section>

        <section id="service" className="p-[10px] md:p-[24px] overflow-hidden">
          <Url isDarkModeOn={isDarkModeOn} />
        </section>

        <section id="boost" className="">
          <BoostBox />
        </section>

        <section id="contact" className=" md:pb-[24px] ">
          <div className="h-[30px]"></div>
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
}
