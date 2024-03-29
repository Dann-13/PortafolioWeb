import Image from "next/image";
const Bulb = () => {
  return <div className="absolute -left-36 -bottom-12  animate-pulse duration-75 z:10
  w-[200px] xl:w-[260px]">
    <Image 
    src={'/bulb3.png'}
    width={260}
    height={200}
    className="w-full h-full"
    alt="foco animado"
    />
  </div>;
};

export default Bulb;
