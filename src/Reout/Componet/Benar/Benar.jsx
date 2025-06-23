import { useTypewriter } from "react-simple-typewriter";
import img1 from "../../../../public/IMG20231110170848-removebg.png";
import "./Benar.css";

const Benar = () => {
  const [text] = useTypewriter({
    words: [
      "Front-End Developer",
      "React JS Developer",
      "JR. Full-stack Developer",
      "MERN Stack",
    ],
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 2000,
    loop: 0,
  });

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 min-h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="text-white text-center lg:text-left max-w-2xl">
          <h1 className="text-sm mb-4 tracking-wide">WELCOME TO MY WORLD</h1>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <h1>
              Hi, I’m <span className="text-[#ff014f]">Dipto Bakshi</span>
            </h1>
            <h1>
              a <span>{text}</span>{" "}
              <span className="text-[#ff014f] text-4xl md:text-5xl">|</span>
            </h1>
          </div>
          <p className="mt-6 text-gray-300 text-sm md:text-base">
            Feel comfortable learning and exploring coding and technology.
            Because of the passion and love for coding, I chose this sector as a career.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] relative">
          <div className="absolute inset-0 rounded-xl shadow-2xl shadow-zinc-100"></div>
          <img
            src={img1}
            alt="Dipto Bakshi"
            className="w-full h-full object-contain relative bottom-6 md:bottom-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Benar;
