import LoginPage from "@/components/pages/LoginPage";
import React, { useState } from "react";
import Head from "next/head";
import ThemeToggle from "@/components/pages/DarkMode";

const login = () => {
  return (
    <>
      <Head>
        <title>SweetShorty - Login</title>
        <meta
          name="description"
          content="SweetShorty is a free URL shortener that helps you shorten long links and track their performance. Improve your efficiency and share smarter links with SweetShorty. Generate QR codes for your links too!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.svg" />
      </Head>
      <LoginPage />
    </>
  );
};

export default login;
