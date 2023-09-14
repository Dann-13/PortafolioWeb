import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials"
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex 
    items-center px-16 xl:px-8 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between
        items-center">
          <Link href={'/'}>
          <Image src={'/avatar.png'} width={208} height={30} priority={true}/>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;