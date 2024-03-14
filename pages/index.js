import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from  '../components/Avatar';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';




const Home = () => {
  return (
  <div className="bg-primary/60 h-full">

    <div className="w-full h-full pt-14  bg-gradient-to-r  from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center pt-20 xl:pt-40  xl:text-left h-full container mx-auto">
        < motion.h1 variants={fadeIn('left', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1 mt-20 md:mt-0'>
          Hola soy Flavio,<br/><span className="text-[#30FF35] ">Desarrollador Web</span>
        </motion.h1>
        <motion.p variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' 
        className="max-w-sm pt-2 text-sm md:text-xl xl:text-lg xl:pt-0 xl:max-w-xl mx-auto xl:mx-0 xl:max-0  xl:mb-16 ">
          Te doy la bienvenida a mi sitio web. Como desarrollador web,
           me especializo en crear soluciones digitales eficientes y de calidad. Con un
           enfoque profesional, transformo tus necesidades en sitios que reflejen
           la seriedad y profesionalismo de tu marca. Estoy comprometido en impulsar 
           tu presencia en línea hacia el éxito!

        </motion.p>
        {/*btn*/ }

        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
        className=" hidden xl:flex"
        >
          <ProjectsBtn className=""/>
        </motion.div>
      </div>
    </div> 
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute
       mix-blend-color-dodge translate-z-0">
        
      </div>
      <ParticlesContainer/>
      <div>{/*Avatar*/}</div>
    </div>


  </div>

  );
};

export default Home;
