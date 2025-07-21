import Image from "next/image";

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  purpleJoined: string; // optional prop
};






const CampSite = ({ backgroundImage, title, subtitle, purpleJoined }: CampSiteProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-center bg-no-repeat lg:rounded-r-7xl 2xl:rounded-5xl rounded-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-500">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-[rgb(107,201,140)] p-4">
          <Image
          src="/folded-map.svg"
          alt="map"
          width={28}
          height={28}
          />
        </div>
      </div>
    </div>


      <div className="p-4 bg-black/50 text-white rounded-lg">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{subtitle}</p>
        <span>{purpleJoined}</span>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
  <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h[640px]'>
    <CampSite
    backgroundImage= "img-1.png"
    title= "Manhi Cruno Camp"
    subtitle="Prigen, Pasuruan"
    purpleJoined="50 + Joined"
    />

    <CampSite 
    
    />
  </div>
    </section>
  )
}

export default Camp
