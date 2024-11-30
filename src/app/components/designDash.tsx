import React from 'react'
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });

const DesignDash = () => {
  return (
    <div className=" lg:w-[623.46px]  lg:h-[270.1px]">
       <div >
          <div>
            <h1
              className={`${heebo.className} lg:text-[27px]  mt-[50px]  width: 304px height: 44px weight:700 text-cssblack`}
            >
              <b>Designing Dashboards</b>
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className=" bg-csspink w-[68px] lg:md:rounded-[50px]  text-center text-white font medium">
                2020
              </div>
              <p>Dashboard</p>
            </div>

            <p
              className={`${heebo.className} lg:w-[622px] lg:h-[150px] p-10 pl-0 pt-3 text-sm md:text-base md:text  `}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet
            </p>
          </div>
          </div>
    </div>
  )
}

export default DesignDash
