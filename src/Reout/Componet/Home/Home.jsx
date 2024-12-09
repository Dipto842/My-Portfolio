
import About from "../About/About";
import Benar from "../Benar/Benar";
import FineMe from "../Benar/FineMe";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";


import Portfolio from "../Portfolio/Portfolio";
import Sklys from "../Sklys/Sklys";

const Home = () => {
  return (
    <div className="">
      <Benar></Benar>
      <FineMe></FineMe>
      <hr className="mt-32 mb-28 h-7 divide lg:w-[1350px] text-center mx-auto" />
      <Sklys></Sklys>
      <Portfolio></Portfolio>
      <hr className=" mb-28 h-7 divide lg:w-[1500px] opacity-20 text-center mx-auto" />
      <About></About>
      <hr className=" mb-20 mt-16 h-7 divide lg:w-[1500px] opacity-20 text-center mx-auto" />
   <Education></Education>
   <Contact></Contact>
    </div>
  );
};

export default Home;
