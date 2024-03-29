import Image from "next/image";
import avatar from '../public/avatar.png';
const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={avatar} width={300} height={250} alt="logo"
    className="translate-z-0 w-full h-full"></Image>

  </div>;
};

export default Avatar;
