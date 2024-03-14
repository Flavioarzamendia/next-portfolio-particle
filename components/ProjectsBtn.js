
import Link from "next/link";


const ProjectsBtn = () => {
  return (
    <div className="mx-auto  xl:mx-0 mb-36">
        <Link href='/work' className=" relative w-[185px] h-[185px] text-black font-sora font-semibold flex justify-center items-center
          bg-cover bg-no-repeat group">
              <span className=" bg-[#37F230] p-4 rounded-lg hover:bg-white hover:text-black uppercase absolute text-md group-hover:translate-y-2 transition-all duration-300">
             
              Ver proyectos
              
              </span>
            </Link>
    </div>
  );
};

export default ProjectsBtn;
