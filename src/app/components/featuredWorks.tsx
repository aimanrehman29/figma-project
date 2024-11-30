import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";
import DesignDash from "./designDash";
const heebo = Heebo({ subsets: ["latin"] });

const Featured_works = () => {
  return (
    <div>
      <div className=" w-[100%] md:w-[919px] h-[934.2px] md:m-[10px]  lg:m-[220px] flex lg:md:flex-col  lg:flex-row lg:mb-[0px] lg:mt-[0px] ">
        {/* image*/}
        <div className="">
          Featured works
          <Image
            className="m-[80px] ml-[0px] mt-[30px] "
            src={"/image/Rectangle 30.png"}
            alt="hero-image"
            width={246}
            height={180}
          />
          <Image
            className="m-[80px] ml-[0px]"
            src={"/image/Rectangle 32.png"}
            alt="hero-image"
            width={246}
            height={180}
          />
          <Image
            className="m-[80px] ml-[0px]"
            src={"/image/Rectangle 34.png"}
            alt="hero-image"
            width={246}
            height={180}
          />
        </div>
        {/* text */}
        <div className="flex flex-col lg:m-[0px] ">
          <DesignDash />
          <DesignDash />
          <DesignDash />
        </div>
      </div>
    </div>
  );
};

export default Featured_works;
