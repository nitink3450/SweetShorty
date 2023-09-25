import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Banner from "@/components/pages/Banner";
import BoostBox from "@/components/pages/Boost";
import ContactUs from "@/components/pages/Contact";
import Url from "@/components/pages/Url";
import Head from "next/head";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <>
      <Head>
        <title>SweetShorty - Shorten and Track Your Links</title>
        <meta
          name="description"
          content="SweetShorty is a free URL shortener that helps you shorten long links and track their performance. Improve your efficiency and share smarter links with SweetShorty. Generate QR codes for your links too!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
      <main id="about" className="relative z-[2] bg-white">
        <Header />
        <section className="p-[10px] md:p-[24px]">
          <Banner />
          <div id="service" className="mt-[20px]"></div>
          <Url />
        </section>

        <section className="pt-[30px] lg:pt-[50px]">
          <BoostBox />
        </section>

        <section id="contact" className=" md:pb-[24px] ">
          <div className="lg:h-[100px] h-0"></div>
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
}
