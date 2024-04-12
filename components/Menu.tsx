import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

const Menu = () => {
  return (
    <section className='flex gap-8 lg:gap-0 flex-wrap  section bg-purple-50'>
      <div className='lg:w-1/2 flex-col max-md:order-2  lg:flexBetween  text-black-10'>
        <div className='w-full mb-6 lg:mb-0 lg:gap-[16px]'>
          <h4 className='regular_14'>CASE STUDY</h4>
          <h2 className='regular-50 lg:my-[16px]'>MenuStack Website</h2>
          <div>
            <Button 
              type="button"
              title="View Design"
              variant="btn_design2 border-black-10"
            />
          </div>
        </div>
        <div className='w-full'>
          <p className='regular-14 mb-[18px] lg:mb-[32px] w-70 lg:w-[400px]'>
            MenuStack is a website for food vendors, the platform is to enable
            them switch to online business.
          </p>
          <div>
            <Link href="https://www.behance.net/gallery/148068127/MenuStack">
              <Button 
                type="button"
                title="SEE CASE STUDY"
                icon="/arroww.png"
                variant="btn_study2"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 lg:flexCenter'>
        <Image src="/menu.png" alt='SoftStudy img' className='w-full' width={660} height={520} />
      </div>
    </section>
  )
}

export default Menu;