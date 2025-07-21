import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string; // optional prop
};






const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampSiteProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-center bg-no-repeat lg:rounded-r-7xl 2xl:rounded-5xl rounded-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-[rgb(107,201,140)] p-4">
          <Image
          src="/folded-map.svg"
          alt="map"
          width={28}
          height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
       <h4 className="bold-18 text-white">{title}</h4>
       <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flexCenter gap-6">
    <span className="flex -space-x-4 overflow-hidden">{PEOPLE_URL.map((url) => (
      <Image 
      className="inline-block h-10 w-10 rounded-full"
      src={url}
      key={url}
      alt="person"
      width={52}
      height={52}
      />
    ))}
      </span>
      <p className="bold-16 text-white md:bold-20">{peopleJoined}</p>
      </div>
    </div>


    </div>
  );
};

const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
  <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h[640px]'>
    <CampSite
    backgroundImage= "img-1.png"
    title= "Manhi Cruno Camp"
    subtitle="Prigen, Pasuruan"
    peopleJoined="50 + Joined"
    />

    <CampSite 
       backgroundImage= "img-2.png"
       title= "Mountain View Camp"
       subtitle="Somewhere in the Wilderness"
       peopleJoined="50 + Joined"
    />
  </div>
  <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
   <div className="bg-[rgb(107,201,140)] p-8 lg:max-w-[500px] xl:max-w-[600px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
    <h2 className="regular-24 md:regular-32 lg:text-[2rem] capitalize text-white"> <strong> Feeling Lost </strong> And Not Knowing The Way?</h2>
    <p className="regular-14 xl:regular-16 mt-5 text-white "> We provide expert-led guidance so you never feel lost on your adventures. Our team carefully plans every step of your journey.</p>
    <Image
    src="/quote.svg"
    alt="CAMP-2"
    width={186}
    height={219}
    className="camp-quote"
    />
   </div>
  </div>
    </section>
  )
}

export default Camp
