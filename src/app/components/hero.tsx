import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="my-[66px] p-6 mx-auto w-[92%] md:w-[1030px] md:h-[330px] flex flex-col-reverse md:flex-row items-center justify-between ">
      {/* text */}
      <div className=" md:w-[521px] h-[305px] flex flex-col md:justify-between md:items-start justify-evenly">
        <h1
          className={`${heebo.className} text-[27px] md:text-[48px] font-black text-cssblack`}
        >
          Hi, I am Aiman,
          <br />
          Frontend Developer
        </h1>
        <p
          className={`${heebo.className} text-cssblack text-[16px] font-normal`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`${heebo.className} w-[205px] h-[50px] bg-csspink  text-white text-[18px] font-medium rounded-sm shadow-md shadow-black/60`}
        >
          Download Resume
        </button>
      </div>
      {/* image  */}
      <div className="w-[292px] h-[299px]  relative">
        <Image
          className="z-50 rounded-full"
          src={"/image/imageedit_6_7641893644.gif"}
          alt="hero-image"
          width={298}
          height={308}
        />
        <div className="bg-heroBg w-[298px] h-[308px] rounded-full absolute top-2 right-2 -z-10" />
      </div>
    </div>
  );
};
{
  /**width: 205px;
height: 50px;
top: 504px;
left: 231px;
gap: 0px;
opacity: 0px;

 */
}

export default Hero;
