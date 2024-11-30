import React from 'react'
import { Heebo } from 'next/font/google'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const heebo = Heebo({ subsets: ["latin"] })

const Footer= () => {
  return (
    <div className='bg-footerBackground space-y-6 flex flex-col items-center justify-center h-[243px] '>
      <div className='flex space-x-12 '>
        <a href={'#'}><FaFacebookSquare className='w-[30px] h-[30px]' /></a>
        <a href={"#"}><FaInstagram className='w-[30px] h-[30px]' /></a>
        <a href={"#"}><FaTwitter className='w-[30px] h-[30px]' /></a>
        <a href={"#"}><FaLinkedin className='w-[30px] h-[30px]' /></a>
      </div>

      <p className={`${heebo.className} text-center font-medium text-[22px]`}>Copyright ©2020 All rights reserved {""}</p>
    </div>
  );
};

export default Footer
