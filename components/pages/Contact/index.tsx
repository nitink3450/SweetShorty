import Button2 from "@/components/global/common/button2";
import React from "react";

const ContactUs = () => {
  const accessKey = process.env.NEXT_PUBLIC_YOUR_ACCESS_KEY;

  return (
    <>
      {/* <div className="flex mt-[20px] lg:mt-[50px] justify-center items-center"> */}
      <div className="w-full">
        {/* <div className="container mx-auto"> */}
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-md ">
          <div className="text-center px-[24px]">
            <h1
              data-aos="fade-in"
              className="lg:text-[60px] w-full md:text-[40px] text-center text-[25px] font-semibold text-[#232127] lg:tracking-[-3px] tracking-[-1px] leading-[0.9] mb-[10px]"
            >
              Contact{" "}
              <span className="text-[#7b1fa2] transition ease-in-out duration-500 hover:text-[#30C59B]">
                Us
              </span>
            </h1>
            <p data-aos="fade-in" className="text-gray-400 dark:text-gray-400">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              data-aos="fade-in"
              className="needs-validation"
              noValidate
            >
              <input type="hidden" name="access_key" value={accessKey} />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />

              <div className="flex flex-col 4xx:flex-row mb-3 md:mb-6 4xx:space-x-4">
                <div className="w-full mb-3 md:mb-0 md:w-full">
                  <label
                    htmlFor="fname"
                    className="block mb-2 italic lg:text-[20px] text-[14.72px] text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="first_name"
                    placeholder="Enter Your Name"
                    required
                    className="w-full input-container input pad px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md"
                  />
                  <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-3">
                    Please provide your first name.
                  </div>
                </div>
                <div className="w-full md:w-full">
                  <label
                    htmlFor="lname"
                    className="block mb-2 italic lg:text-[20px] text-[14.72px] text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="lname"
                    placeholder="Enter Your Last Name"
                    required
                    className="w-full input-container input pad px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md"
                  />
                  <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-3">
                    Please provide your last name.
                  </div>
                </div>
              </div>

              <div className="flex flex-col 4xx:flex-row mb-6 4xx:space-x-4">
                <div className="w-full mb-3 md:mb-0 md:w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 italic lg:text-[20px] text-[14.72px] text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md input-container input pad"
                  />
                  <div className="empty-feedback text-red-400 text-sm mt-3">
                    Please provide your email address.
                  </div>
                  <div className="invalid-feedback text-red-400 text-sm mt-3">
                    Please provide a valid email address.
                  </div>
                </div>

                <div className="w-full md:w-full">
                  <label
                    htmlFor="phone"
                    className="block italic lg:text-[20px] text-[14.72px] mb-2 text-gray-600 dark:text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md input-container input pad"
                  />

                  <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-3">
                    Please provide your phone number.
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 italic lg:text-[20px] text-[14.72px] text-gray-600 dark:text-gray-400"
                >
                  Your Message
                </label>

                <textarea
                  //   rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md input-container input pad"
                  required
                ></textarea>
                <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-3">
                  Please enter your message.
                </div>
              </div>
              <div className="mb-6 flex justify-center items-center">
                <Button2
                  mr="group-hover:mr-[30px]"
                  ml="ml-[10px]"
                  class="lg:p-[11px_33px] p-[8px_20px] lg:text-[20px] text-[17.37px]"
                >
                  Send Message
                </Button2>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default ContactUs;
