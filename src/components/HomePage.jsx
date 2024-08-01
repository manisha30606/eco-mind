import { useEffect } from "react";
import { useState } from "react";
import { IoEarth } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";

export default function HomePage() {
  const [btnContent, setBtnContent] = useState("Without Greens");
  const [withTrees, setWithTrees] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (btnContent === "With Greens") {
        setBtnContent("Without Greens");
        setWithTrees(false);
      } else {
        setBtnContent("With Greens");
        setWithTrees(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [btnContent, setBtnContent, setWithTrees]);
  return (
    <>
      <div
        className="diagonal-gradiant overflow-hidden mb-0 h-auto md:h-screen lg:h-screen xl:h-screen "
        id="homePage"
      >
        <div
          name="Home"
          className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-20 h-auto  "
        >
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
              <span className="text-2xl flex flex-row gap-1">
                Welcome User{" "}
                <FaHandFist className="text-green-600 font-bold text-xl" />
              </span>
              <div className="flex space-x-1 text-1xl md: text-3xl">
                We are EcoMind'ians{" "}
              </div>
              <br />
              <p
                className="text-sm md:text-md text-justify"
                style={{ color: "#f1f5f9" }}
              >
                <p className="text-xl sm:text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                  <span className="text-red-500 font-bold text-xl sm:text-2xl md:text-3xl">
                    "Small steps today, a sustainable tomorrow..."
                  </span>
                  <br />
                  <br />
                  Raise awareness about global warming and its impact on the
                  environment.Educate users about sustainable practices and
                  their benefits.Encourage users to take action and make
                  environmentally conscious choices.Provide resources and tools
                  for individuals and businesses to adopt sustainable practices.
                </p>
              </p>
              <br />
              <div className="flex flex-col items-center md:flex-row justify-between space-y-10 space-x-0 md:space-y-0">
                <div className="space-y-3 p-3  animate__animated animate__fadeInUp animate__delay-0.5s">
                  <h1
                    className="font-bold text-center text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-blue-600"
                    style={{ color: "black" }}
                  >
                    We are on
                  </h1>
                  <div className="flex space-x-5">
                    <FaFacebookSquare className="text-2xl t-colour-change md:text-2xl hover:scale-110 duration-200 cursor-pointer text-blue-600" />
                    <FaInstagramSquare className="text-2xl t-colour-change md:text-2xl hover:scale-110 duration-200 cursor-pointer text-blue-600" />
                    <FaYoutube className="text-2xl t-colour-change md:text-2xl hover:scale-110 duration-200 cursor-pointer text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mx-auto md:w-1/2 md:ml-10 md:mt-20 mt-8 order-1 lg:ml-32 relative">
              <IoEarth
                className={`customTheSize w-auto rounded-full mx-auto ${
                  withTrees ? "text-green-500/90" : "text-gray-900/50"
                }`}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 flex flex-col justify-center items-center">
                <h2
                  className={`text-2xl font-bold ${
                    withTrees ? "text-blue-800" : "text-red-700"
                  }`}
                >
                  Our Earth <br />
                  {btnContent}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
