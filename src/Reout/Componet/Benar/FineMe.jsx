import { IoLogoGithub } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import './Benar.css';

const FineMe = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row gap-10 lg:gap-32 px-4 md:px-10 lg:px-32 py-12 justify-center items-start">
      
      {/* Social Links */}
      <div>
        <h1 className="text-2xl font2 mb-4">Find with me</h1>
        <div className="flex gap-6">
          <a
            className="btn bg-[#212428] text-white border-[#212428] hover:bg-slate-900 hover:-translate-y-1 shadow-md transition"
            href="https://www.linkedin.com/in/dipto-bakshi"
            target="_blank"
            rel="noreferrer"
          >
            <SlSocialLinkedin size={25} />
          </a>
          <a
            className="btn bg-[#212428] text-white border-[#212428] hover:bg-slate-900 hover:-translate-y-1 shadow-md transition"
            href="https://github.com/Dipto842"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={25} />
          </a>
        </div>
      </div>

      {/* Best Skills */}
      <div>
        <h1 className="text-2xl font2 mb-4">Best skill on</h1>
        <div className="flex gap-6">
          <span className="btn bg-[#212428] text-white border-[#212428] shadow-md cursor-not-allowed hover:bg-slate-900 transition">
            <RiReactjsFill size={25} />
          </span>
          <span className="btn bg-[#212428] text-white border-[#212428] shadow-md cursor-not-allowed hover:bg-slate-900 transition">
            <RiNextjsFill size={25} />
          </span>
          <span className="btn bg-[#212428] text-white border-[#212428] shadow-md cursor-not-allowed hover:bg-slate-900 transition">
            <FaJs size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FineMe;
