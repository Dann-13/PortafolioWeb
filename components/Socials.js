import Link from "next/link";
import {RiGithubLine, RiLinkedinBoxLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiLinkedinBoxLine />
    </Link>
  </div>;
};

export default Socials;
