import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";



const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] mb-10">
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={"/"}
          className="text-2xl  md:text-4xl text-white font-semibold font-sora"
          alt="Desarrollo web">FA <span className="text-lg font-normal text-gray-400">Desarrollo Web</span>
          </Link>
          <Socials/>
      </div>
        
    </div>
    </header>
  );
};

export default Header;
