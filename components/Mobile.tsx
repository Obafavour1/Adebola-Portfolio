import Link from 'next/link'
import React from 'react'
import Button from './Button'


const Mobile = () => {
  return (
    <section className='lg:max-container lg:flexCenter  mt-[40px] gap-[24px]'>
      <div className="card bg_gradient1">
        <h3 className='regular-32 w-full'>ChowSpot Mobile App</h3>
        <div>
          <p className='regular-14 mb-[10px]'>Welcome to ChowSpot, the ultimate restaurant app designed to elevate 
            your dining experiennce, Whether you are a food enthusiast, casual diner or
            someone with dietary preferences. This food explorer is here to guide
            you through a culinary journey.
          </p>
          <div>
            <Link href="https://www.behance.net/gallery/187205817/ChowSpot">
              <Button 
                type="button"
                title="View"
                variant="btn_view"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='card bg_gradient2 mt-[20px] lg:mt-0'>
        <h3 className='regular-32 w-full'>Music Player Mobile App </h3>
        <div>
          <p className='regular-14 mb-[10px]'>The design solution for the music player app, named Harmoni, aims 
            to provide users with a seamless and immersive 
            music listening experience tailored to their preferences.
          </p>
          <div>
            <Link href="https://www.behance.net/gallery/163075945/Music-player-store" >
              <Button 
                type="button"
                title="View"
                variant="btn_view"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mobile;