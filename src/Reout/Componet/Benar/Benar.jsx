import { useTypewriter } from "react-simple-typewriter";
import img1 from "../../../../public/IMG20231110170848-removebg.png";
import "./Benar.css";

const Benar = () => {
  const [text] = useTypewriter({
    /* Hook Config */
    words: [
      "front-end developer",
      "React JS Developer",
      "JR.Full-stack developer",
      "MERN STACK",
    ],
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 2000,
    loop: 0,
  });
  return (
    <div>
      <div className="flex flex-row-reverse justify-evenly gap-40 items-center  mt-48 ">
        <div className="w-[400px] h-[400px] shadow-2xl   shadow-zinc-50  rounded-xl">
          <img
            width={"400px"}
            className="relative bottom-[105px]"
            src={img1}
            alt=""
          />
        </div>
        <div className="text-white ">
          <h1 className="text-sm mb-4">WELCOME TO MY WORLD</h1>
          <div className="text-6xl">
            <h1>
              Hi, I’m <span className="text-[#ff014f]">Dipto Bakshi</span>
            </h1>
            <h1>
              a <span>{text}</span>{" "}
              <span className="text-[#ff014f] text-5xl">|</span>
            </h1>
          </div>
          <p className="mt-10 w-[32rem] font2">
            Feel comfortable learning and exploring coding and technology. And
            because of the passion and love for coding and technology, choosing
            this sector as a career.
          </p>
        </div>
      </div>
      
 

        
    
    </div>
  );
};

export default Benar;
