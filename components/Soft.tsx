import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

const Soft = () => {
  return (
    <section className='flex gap-8 lg:gap-0 flex-wrap section bg-black-10'>
      <div className='lg:w-1/2 flex-col max-md:order-2  lg:flexBetween  text-black-50'>
        <div className='w-full mb-6 lg:mb-0 lg:gap-[16px]'>
          <h4 className='regular_14'>CASE STUDY</h4>
          <h2 className='regular-50 lg:my-[16px]'>SoftStudy Website</h2>
          <div>
            <Button 
              type="button"
              title="View Design"
              variant="btn_design"
            />
          </div>
        </div>
        <div className='w-full'>
          <p className='regular-14 mb-[18px] lg:mb-[32px] w-70 lg:w-[400px]'>SoftStudy is a website that helps students study with
            ease and without hassle;
          </p>
          <div>
            <Link href="https://www.behance.net/gallery/149049877/SoftStudy-Case-Study">
              <Button 
                type="button"
                title="SEE CASE STUDY"
                icon="/arroww.png"
                variant="btn_study flexCenter"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=' w-full lg:w-1/2 lg:flexCenter'>
        <Image src="/soft.png" alt='SoftStudy img' className='w-full rounded-[20px]' width={660} height={520} />
      </div>
    </section>
  )
}

export default Soft