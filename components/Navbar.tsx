"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { HiArrowUpRight } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import clsx  from 'clsx';


const Navbar = () => {
  const[isMenuSideOpen, setMenu] = useState(false)

  return (
    <nav className=" text-black-10 px-[20px]  lg:px-[40px] bg-purple-50 rounded-t-[20px] regular-14 max-container flexBetween py-5">
      <div>
        <Image src="/navbarbrand.png" alt="Adebola logo" width={200} height={50} />
      </div> 
      <ul className="hidden text-black-10 lg:flex gap-12 ">
        <li className="hover:underline">
          <Link href="https://www.linkedin.com/in/adebola-adekahunsi-38524a185/" 
            className="gap-1 flexCenter" >LINKEDIN
            <HiArrowUpRight />
          </Link>
        </li>
        <li className="hover:underline">
          <Link href="https://www.instagram.com/designwithdebola/" 
            className="flex gap-2 flexCenter" >INSTAGRAM
            <HiArrowUpRight />
          </Link>
        </li>
        <li className="hover:underline">
          <Link href="https://www.behance.net/adebolaadekahu1" 
            className="flex gap-1 flexCenter" >BEHANCE
            <HiArrowUpRight /> 
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex ">
        <Link href="https://api.whatsapp.com/send?phone=2348128860774&text=Hello%2C%20I%20would%20like%20to%20work%20with%20you" >
          <Button 
            type="button"
            title="LET'S TALK"
            icon="/arroww.png"
            variant="btn_talk"
          />
        </Link>
      </div>
      <div className="lg:hidden">
        <RxHamburgerMenu onClick={() => setMenu(true)} className="w-[30px] h-[30px] text-purple-500 cursor-pointer" />
      </div>


      <section className={clsx("menu_gradient lg:hidden z-10 backdrop-blur-sm top-0 right-0 -translate-x-[-500px] transition-all duration-[700ms] py-9 fixed h-screen w-10/12",
        isMenuSideOpen && "translate-x-[1px]"
        )}>
        <div className="flexCenter flex-col gap-16">
            <div className=" w-full flex flexBetween">
              <div></div>
              <IoMdClose onClick={() => setMenu(false)} className="w-[50px] mr-8 h-[30px] text-purple-10 cursor-pointer" />
            </div>
            <ul className="flexCenter flex-col ">
              <li className="hover:underline">
                <Link href="https://www.linkedin.com/in/adebola-adekahunsi-38524a185/" 
                  className="flex gap-1 flexCenter" >LINKEDIN
                  <HiArrowUpRight />
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="https://www.instagram.com/designwithdebola/" 
                  className="flex gap-2 my-10 flexCenter" >INSTAGRAM
                  <HiArrowUpRight /> 
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="https://www.behance.net/adebolaadekahu1" 
                  className="flex gap-1 flexCenter" >BEHANCE
                  <HiArrowUpRight />
                </Link>
              </li>
        </ul>
        <div>
          <Link href="https://api.whatsapp.com/send?phone=2348128860774&text=Hello%2C%20I%20would%20like%20to%20work%20with%20you" >
            <Button 
              type="button"
              title="LET'S TALK"
              icon="/arroww.png"
              variant="btn_talk"
            />
          </Link>
        </div>

        </div>
    </section>
    </nav>
  )
}

export default Navbar