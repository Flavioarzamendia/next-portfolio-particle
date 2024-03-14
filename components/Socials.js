import Link from "next/link";
import {RiLinkedinLine, RiInstagramLine, RiGithubLine, RiFacebookLine} from "react-icons/ri"


const Socials = () => {
  return <div className="flex items-end gap-x-5 text-lg md:text-2xl">
    <Link href={''} className="hover:text-[#30FF35] transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
    <Link href={''} className="hover:text-[#30FF35] transition-all duration-300">
      <RiGithubLine/>
    </Link>
    <Link href={''} className="hover:text-[#30FF35] transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={''} className="hover:text-[#30FF35] transition-all duration-300">
      <RiFacebookLine/>
    </Link>
  </div>;
};

export default Socials;
