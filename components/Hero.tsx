import Image from "next/image"
import Link from "next/link"
import Hamburger from "./Hamburger"


const Hero = () => {
  return (
    <header className="relative bg-purple-50 flex flex-col lg:flex-row pb-5 px-[20px] w-full min-h-[500px] max-container rounded-b-[20px] lg:h-[598px] lg:flexBetween">
      {/* <Hamburger /> */}
      <div className="mt-12 lg:mt-0 lg:w-11/12 flexBetween max-md:order-2 flex-col lg:h-[518px]">
        <h1 className="regular-100 text-black-10">I create <span className="text_gradient italic">stunning</span> design solutions to problems</h1>
        <p className="regular-14 mt-6 lg:mt-0 w-full leading-[22px] text-black-10">Available for freelance work</p>
      </div>
      
      <div className="flex mt-9 lg:mt-0 max-md:h-1/2  order-1 w-full lg:w-7/12">
        <Image src='/hero.png' alt="" width={560} height={705} className="flexCenter" />
      </div>
    </header>
  )
}

export default Hero