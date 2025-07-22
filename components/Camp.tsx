import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string; // optional prop
  className:string
};






const CampSite = ({ backgroundImage, title, subtitle, peopleJoined, className }: CampSiteProps) => {
  return (
    <div
      className={`h-full bg-cover bg-center bg-no-repeat rounded-lg ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col justify-between p-6 lg:px-12 lg:py-10 bg-black/30 rounded-lg">
        {/* Top Info */}
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-[rgb(107,201,140)] p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
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
    <section className="padding-container 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[500px]">
        {/* First camp site - bigger */}
        <CampSite
          backgroundImage="img-1.png"
          title="Manhi Cruno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
          className="min-w-[70%] lg:min-w-[800px]"
        />

        {/* Second camp site - smaller */}
        <CampSite
          backgroundImage="img-2.png"
          title="Mountain View Camp"
          subtitle="Wilderness"
          peopleJoined="35+ Joined"
          className="min-w-[50%] lg:min-w-[600px]"
        />
      </div>

      {/* Bottom section */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[rgb(107,201,140)] p-8 lg:max-w-[500px] xl:max-w-[600px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 lg:text-[2rem] capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            We provide expert-led guidance so you never feel lost on your adventures. Our team carefully plans every step of your journey.
          </p>
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
  );
};


export default Camp
