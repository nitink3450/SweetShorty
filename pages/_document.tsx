import Header from "@/components/global/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-Poppins not-italic">
        {/* <Header /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
