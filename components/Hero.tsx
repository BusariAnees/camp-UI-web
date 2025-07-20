import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
  <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
<div className='hero-map'></div>

{/* LEFT */ }
<div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
    <Image src="/camp.svg"
    alt='camp'
    width={50}
    height={50}
    className='absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]'
    />
    <h1 className='lg:font-extrabold  text-[2.2rem] font-bold leading-[3rem] lg:text-[3rem]'>Manshi Cruno <br /> Camp Region</h1>
    <p className='text-[0.8rem] mt-6 text-gray-500 xl:max-w-[520px]' > We want to be on each of your journey</p>
    <div className='my-11 flex flex-wrap gap-5'>
<div className='flex items-center gap-2'>
    {Array(5).fill(1).map((_, index) => (
        <Image 
        src="/star.svg"
        key={index}
        alt="star"
        width={24}
        height={24}
        />
      
    ))}
</div>
    </div>
</div>
  </section>
  )
}

export default Hero
