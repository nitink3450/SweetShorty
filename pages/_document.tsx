import Header from "@/components/global/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="/js/validation.js"></script>
        <script
          async
          src="https://kit.fontawesome.com/64d58efce2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="font-Poppins not-italic">
        {/* <Header /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
