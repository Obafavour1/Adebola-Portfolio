import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="max-container px-[20px] lg:px-[40px] mt-[40px] py-[40px] flex-col  rounded-[40px] flexBetween bg-purple-50 min-h-[500px] lg:h-[600px]">
      <div className="flexBetween w-full">
        <div>
        <Image src="/navbarbrand.png" alt="Adebola logo" width={200} height={50} />
        </div>
        <ul className=" hidden lg:flex text-black-10 gap-8 regular_14">
          <li>
            <Link href="https://www.linkedin.com/in/adebola-adekahunsi-38524a185/" 
              className="flex gap-1" >LINKEDIN
              <HiArrowUpRight /> 
            </Link>
          </li>
          <li>
              <Link href="https://www.instagram.com/designwithdebola/" 
              className="flex gap-2" >INSTAGRAM
            <HiArrowUpRight /> 
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col flexCenter w-full lg:w-[900px]">
        <h1 className="regular-100 text-center text-black-10 mb-[40px]">Intrested in working together?</h1>
        <div className="lg:flexCenter">
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
      <div className="flexBetween flex-col gap-6 lg:flex-row w-full text-black-10">
        <p>&copy 2024-All Rights Reserved</p>
        <p>Available for freelace work</p>
      </div>
    </footer>
  )
};

export default Footer