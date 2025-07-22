import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="./camp.svg" alt="camp" width={50} height={50}  />
        <p className="uppercase regular-18 -mt-1 mb-3 text-[rgb(107,201,140)]">
          {" "}
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-500 xl:max-w-[520px]">
            Only with the Hilink application you will no longer get lost.
            Navigate confidently through unfamiliar places with advanced GPS
            tracking and offline maps that work even without an internet
            connection. Discover hidden spots recommended by experienced
            travelers.
          </p>
        </div>
        <div className="mt-[5rem] flexCenter max-container relative w-full">
          <Image
            src="/boat.png"
            alt="boat"
            width={1440}
            height={200}
            className="w-full h-[200px] lg:h-[300px] object-cover object-center lg:rounded-3xl "
          />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
          src="meter.svg"
          alt="meter"
          width={16}
          height= {148}
          className="h-full w-auto"
          />
  <div className="flex flex-col justify-between">
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full">
        <p className="text-gray-500 text-base">Destination</p> 
        <p className="text-green-500 font-bold">48 min</p> 
      </div>
      <p className="text-lg font-bold mt-2">Aguas Calientes</p>
    </div>

    <div className="flex flex-col w-full">
        <p className="text-gray-500 regular-16">Start track</p> 
       <h4 className="bold-20 mt-2 whitespace-nowrap"> Wonorejo Pasuruan</h4>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
