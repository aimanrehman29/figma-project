import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
    let navItems = [
    {
        name: "works",
        Link: "#",
    },
    {
        name: "blog",
        Link: "#",
    },
    {
        name: "contact",
        Link: "#",
    }];
    return (
        <ul className={`${inter.className} m-[66px] flex items-center justify-end h-[24px]  font-medium text-[20px] space-x-6`}>
            {
                navItems.map((item, i) => (
                    <li key={i}>
                        <Link href={item.Link}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default Navbar
