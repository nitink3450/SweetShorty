import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Banner from "@/components/pages/sec-banner";
import BoostBox from "@/components/pages/sec-boost";
import ContactUs from "@/components/pages/sec-contact";
import Url from "@/components/pages/sec-url";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swenfly - Shorten and Track Your Links</title>
        <meta
          name="description"
          content="Swenfly is a free URL shortener that helps you shorten long links and track their performance. Improve your efficiency and share smarter links with Swenfly. Generate QR codes for your links too!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main id="about" className="relative">
        <Header />
        <section className="p-[10px] md:p-[24px] bg-white">
          <Banner />
          <div id="service" className="mt-[20px]"></div>
          <Url />
        </section>

        <section className="pt-[30px] lg:pt-[50px] bg-white">
          <BoostBox />
        </section>

        <section id="contact" className="p-[10px]  md:p-[24px] bg-white">
          <div className="lg:h-[100px] h-0"></div>
          <ContactUs />
        </section>
        <Footer />
      </main>
    </>
  );
}
