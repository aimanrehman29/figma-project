import React from 'react'
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });



const RecentCard = () => {
  return (
    <div>
       <div className="w-[100%] md:w-[483px] h-[356px] flex items-center  bg-white">
          <div className="m-auto p-4 w-[100%] md:w-[391px] h-[286px] flex flex-col items-start justify-between">
            <h2 className={`${heebo.className} font-bold text-[26px]`}>
              Making a design system from scratch
            </h2>
            <div className=" w-[80%] md:w-[301,28px] h-[42,12]px  flex items-start text-[18px] font-normal text-black/70">
              <p>12 Feb 2020</p>
              <p className="mx-4">|</p>{" "}
              {/* Adds space between elements */}
              <p>Design, Pattern</p>
            </div>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
    </div>
  )
}

export default RecentCard
