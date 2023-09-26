import Button2 from "@/components/global/common/button2";
import React, { useState, useEffect, useRef } from "react";
import { BiLink } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import QRCode from "qrcode.react"; // Import the QRCode component
import html2canvas from "html2canvas"; // Import the html2canvas library
import jsPDF from "jspdf"; // Import the jsPDF library
import Link from "next/link";
import { useMediaQuery } from "../../global/common/UseMediaQuery/UseMediaQuery";

const Url = () => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width:768px");

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isShortning, setIsShortning] = useState(false);

  // Use useEffect to access localStorage safely
  //  useEffect(() => {
  //   const getLocalStorage = () => {
  //     let links = localStorage.getItem("links");
  //     if (links) {
  //       return JSON.parse(links);
  //     } else {
  //       return null;
  //     }
  //   };

  //   const storedLinks = getLocalStorage();
  //   if (storedLinks) {
  //     setShortUrl(storedLinks);
  //   }
  // }, []);

  const pageWidth = 210;
  const pageHeight = 297;

  // Calculate the center of the page
  const centerX = pageWidth / 2;
  const centerY = pageHeight / 2;

  // Define the desired size for the image
  const imageWidth = 100; // Adjust as needed
  const imageHeight = 100; // Adjust as needed

  // Calculate the position for the image to be centered
  const imageX = centerX - imageWidth / 2;
  const imageY = centerY - imageHeight / 2;

  const handleDownload = (format: string) => {
    if (!qrCodeRef.current) return;

    html2canvas(qrCodeRef.current, { useCORS: true }).then((canvas) => {
      const qrImage = canvas.toDataURL(`image/${format}`);

      if (format === "svg") {
        if (qrCodeRef.current) {
          const svgContent = qrCodeRef.current.innerHTML;
          const blob = new Blob([svgContent], { type: "image/svg+xml" });

          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = `qrcode.svg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      } else if (format === "pdf") {
        const pdf = new jsPDF();
        // pdf.addImage(qrImage, "JPG", 10, 10, 50, 50);
        pdf.addImage(qrImage, "JPG", imageX, imageY, imageWidth, imageHeight);
        pdf.save(`qrcode.pdf`);
      } else {
        const a = document.createElement("a");
        a.href = qrImage;
        a.download = `qrcode.${format}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });
  };

  const handleShorten = () => {
    if (!longUrl) {
      alert("Input is empty");
    } else {
      const shortenLink = async () => {
        setIsShortning(true); // Set loading to true when fetch starts
        try {
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${longUrl}`
          );
          const data = await res.json();
          // console.log(data.result);
          // localStorage.setItem("links", JSON.stringify(data.result.full_short_link));
          setShortUrl(data.result.full_short_link);
        } catch (error) {
          console.error("Error while fetching:", error);
        } finally {
          setIsShortning(false);
        }
      };

      shortenLink();
    }
  };

  const handleCopy = () => {
    // Copy the short URL to the clipboard
    const textArea = document.createElement("textarea");
    textArea.value = shortUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className=" w-full flex justify-center items-center flex-col mt-[50px] lg:mt-[100px] gap-[5px]">
        <div className="w-full flex justify-center items-center flex-col gap-[5px]">
          <div data-aos="fade-in" className="lg:text-[40px] md:text-[20px] lg:text-start text-center text-[25px] font-semibold dark:text-[#F7F7F7] text-[#232127] lg:tracking-[-3px] tracking-[-1px] leading-[0.9]">
            {`We’ve`}
            <span className="text-[#7b1fa2]  ease-in-out duration-500 transition  hover:text-[#30C59B] ml-[6px]">expanded!</span>
          </div>
          <div data-aos="fade-in" className="lg:text-[40px] md:text-[20px] lg:text-start text-center text-[20px] font-semibold dark:text-[#F7F7F7] text-[#232127] lg:tracking-[-3px] tracking-[-1px] leading-[0.9]">
            <span className="text-[#7b1fa2] transition ease-in-out duration-500 hover:text-[#30C59B]">Shorten</span> URLs. Generate{" "}
            <span className="text-[#7b1fa2] transition ease-in-out duration-500 hover:text-[#30C59B]">QR</span> Codes.
          </div>
          <div data-aos="fade-in" className="lg:text-[20px] text-[14.72px] text-center lg:text-start font-normal  text-[#9e9aa7]  leading-[1.5] mt-[5px] lg:mt-[10px]">
            copy your long boring url. Paste it Below. Then 💥 You got it right!
          </div>
        </div>
        <div data-aos="fade-in" className="w-full mt-[10px] flex justify-center items-center 2xl:w-[1240px] 2xl:h-[90px] gap-[30px] 2xl:gap-[50px] flex-col 2xl:flex-row">
          <div className="input-container w-[90%] hover:w-[98%] lg:w-[900px] lg:hover:w-[930px]">
            <input
              type="text"
              name="text"
              className="input dark:dark-in light-in hidden md:flex text-[17.37px] lg:text-[25px] hover:w-[98%] lg:hover:w-[930px]"
              placeholder="Paste long url and shorten it..."
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <input
              type="text"
              name="text"
              className="input flex md:hidden text-[17.37px] lg:text-[25px] hover:w-[98%] lg:hover:w-[930px]"
              placeholder="Paste long url..."
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <span className="icon text-[30px] text-white">
              {longUrl ? (
                <IoCloseSharp
                  onClick={() => {
                    setLongUrl("");
                  }}
                  className="cursor-pointer"
                />
              ) : (
                <BiLink />
              )}
            </span>
          </div>
          <Button2
            mr="group-hover:mr-[30px]"
            ml="ml-[30px]"
            onClick={handleShorten}
            class="lg:p-[11px_33px] p-[8px_20px] lg:text-[25px] text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
          >
            {isShortning ? "Shortning..." : "Shorten"}
          </Button2>
        </div>{" "}
        {shortUrl && (
          <div data-aos="fade-in" className="w-full mt-[10px] 11px:mt-[0px] flex justify-center items-center 2xl:w-[1240px] 2xl:h-[90px] gap-[30px] 2xl:gap-[50px] flex-col 2xl:flex-row">
            <div
              style={{ width: "fit-content" }}
              className=" input-container input dark:dark-in light-in short-input flex text-[17.37px] lg:text-[25px]"
            >
              {/* <input
                type="text"
                value={shortUrl}
                // readOnly
                className="input short-input flex text-[17.37px] lg:text-[25px] w-full"
              /> */}

              {shortUrl}
            </div>

            <div className="flex gap-[20px] md:gap-[50px]">
              <Button2
                mr="group-hover:mr-[30px]"
                ml="ml-[10px]"
                disable={isCopied}
                onClick={handleCopy}
                class="lg:p-[11px_33px] p-[8px_20px] lg:text-[25px] text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
              >
                {isCopied ? "Copied!" : "Copy"}
              </Button2>
              {!isMobile && (
                <Button2
                  mr="group-hover:mr-[30px]"
                  ml="ml-[10px]"
                  disable={isCopied}
                  onClick={() => {
                    setShowQRCode(!showQRCode);
                  }}
                  class="lg:p-[11px_33px] p-[8px_20px] lg:text-[25px] text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                >
                  QR
                </Button2>
              )}
              <Link href={shortUrl} passHref target="_blank">
                <Button2
                  mr="group-hover:mr-[30px]"
                  ml="ml-[10px]"
                  disable={isCopied}
                  class="lg:p-[11px_33px] p-[8px_20px] lg:text-[25px] text-[17.37px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                >
                  Visit
                </Button2>
              </Link>
            </div>

            {isMobile && (
              <Button2
                mr="group-hover:mr-[30px]"
                ml="ml-[10px]"
                disable={isCopied}
                onClick={() => {
                  setShowQRCode(!showQRCode);
                }}
                class="lg:p-[11px_33px] w-[90%] p-[8px_20px] lg:text-[25px] text-[17.37px] outline outline-[0.1px] outline-[rgb(48,197,155)] focus-within:outline-[#000]"
              >
                QR Code
              </Button2>
            )}
          </div>
        )}
        <div data-aos="fade-in" className="flex md:gap-5 gap-1 mt-[15px]">
          {/* Show QR code when shortUrl is available */}
          {showQRCode && (
            <div
              className="w-fit flex m-auto justify-center items-center bg-transparent"
              ref={qrCodeRef}
            >
              <QRCode
                id="qr-gen"
                renderAs="svg"
                // bgColor="black"
                // fgColor="white"
                level="H"
                value={shortUrl}
                includeMargin={true}
                size={isMobile ? 220 : 300}
              />
            </div>
          )}
          {/* Download buttons for different formats */}
          {showQRCode && (
            <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-start gap-4">
              <Button2
                onClick={() => handleDownload("png")}
                class="lg:p-[11px_33px] p-[8px_20px] lg:text-[18px] text-[12px]  outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                download="true"
              >
                {!isMobile ? "Download" : " "} PNG
              </Button2>
              <Button2
                onClick={() => handleDownload("jpg")}
                class="lg:p-[11px_33px] p-[8px_20px] lg:text-[18px] text-[12px]  outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                download="true"
              >
                {!isMobile ? "Download" : " "} JPG
              </Button2>
              <Button2
                onClick={() => handleDownload("svg")}
                class="lg:p-[11px_33px] p-[8px_20px] lg:text-[18px] text-[12px] outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                download="true"
              >
                {!isMobile ? "Download" : " "} SVG
              </Button2>
              <Button2
                onClick={() => handleDownload("pdf")}
                class="lg:p-[11px_33px] p-[8px_20px] lg:text-[18px] text-[12px]  outline outline-[0.1px] outline-[#30C59B] focus-within:outline-[#000]"
                download="true"
              >
                {!isMobile ? "Download" : " "} PDF
              </Button2>
            </div>
          )}
        </div>
        <div data-aos="fade-in" className="lg:text-[14px] text-[10px] text-center lg:text-start font-normal text-[#9e9aa7]  leading-[1.5] mt-[10px] lg:mt-[10px]">
          URL Shortener → By using our service you accept the{" "}
          <span className="text-[#1e5af9] cursor-pointer">
            Terms of service
          </span>{" "}
          and <span className="text-[#1e5af9] cursor-pointer">Privacy.</span>
        </div>
      </div>
    </>
  );
};

export default Url;
