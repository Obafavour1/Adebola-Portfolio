"use client"
import Link from "next/link"
import Button from "./Button"
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";


const Hamburger = () => {
    const [isMenuSideOpen, setMenu]= useState(false);

  return (
    <section className="bg-purple-500 lg:hidden z-10 backdrop-blur-sm top-0 right-0 py-9 fixed h-screen w-10/12">
        <div className="flexCenter flex-col gap-16">
            <div className=" w-full flex flexBetween">
            <div></div>
            <IoMdClose onClick={()=> setMenu(true)} className="w-[50px] h-[30px] text-purple-50" />
            </div>
            <ul className="flexCenter flex-col ">
                <li className="hover:underline">
                    <Link href="" className="flex gap-1 flexCenter" >LINKEDIN
                    <HiArrowUpRight />
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link href="" className="flex gap-2 my-10 flexCenter" >INSTAGRAM
                    <HiArrowUpRight /> 
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link href="" className="flex gap-1 flexCenter" >BEHANCE
                    <HiArrowUpRight />
                    </Link>
                </li>
        </ul>
        <div className="">
            <Button 
            type="button"
            title="LET'S TALK"
            icon="/arroww.png"
            variant="btn_talk"
            />
        </div>

        </div>
    </section>
  )
}

export default Hamburger