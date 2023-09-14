import Image from "next/image";

const Circles = () => {
  return (
    <div className=" w-[100px] xl:w-[150px] absolute -right-2 -bottom-2 overflow-hidden mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image src={'/circleblue.svg'} width={260} height={200} className="w-full h-full" />
    </div>
  );
};

export default Circles;
