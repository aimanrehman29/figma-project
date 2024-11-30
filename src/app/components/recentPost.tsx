import React from "react";
import Link from "next/link";
import { Heebo } from "next/font/google";
import RecentCard from "./recentCard";

const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div className="bg-recentBackground my-[66px] md:h-[502px] w-fullscreen  flex flex-col justify-evenly">
      <div className=" w-[92%] md:w-[1030px] mx-auto  p-6  flex flex-col justify-between">
        <div className=" flex flex-row justify-between">
        <h2 className={`${heebo.className} text-[22px] font-medium`}>
          Recent Post
        </h2>
        <Link
          href={"#"}
          className={`${heebo.className} text-[22px] font-medium text-csspink`}
        >
          {" "}
          view all
        </Link>
        </div>
        <div className=" mt-[16px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
       <RecentCard/>
       <RecentCard/>
       </div>
      </div>

     
      
      </div>
    
  );
};

export default RecentPost;
