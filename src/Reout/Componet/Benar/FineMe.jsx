import { IoLogoGithub } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import './Benar.css'
const FineMe = () => {
    return (
        <div className="text-white   flex  gap-32 ml-72">
                 
       <div>
       <h1 className="text-2xl font2">Find with me</h1>
          <div className="flex  gap-16 items-center mt-4 ">
           <div  >
           <a  className="box-content shadow-md  btn bg-[#212428]  text-white border-[#212428] hover:bg-slate-900 hover:border-[#212428] hover:-translate-y-1  shadow-slate-500 text-center " href="https://www.linkedin.com/in/dipto-bakshi">
              <SlSocialLinkedin size={'25'}  />
            </a>
           </div>
          <div>
          <a className="box-content shadow-md  btn bg-[#212428]  text-white border-[#212428] hover:bg-slate-900 hover:border-[#212428] hover:-translate-y-1  shadow-slate-500 text-center" href="https://github.com/Dipto842">
              <IoLogoGithub size={'25'} />
            </a>
          </div>
          </div>
       </div>
          <div>
            <h1 className="text-2xl font2">Best skill on</h1>
            <div className="flex gap-10 mt-4">
                <div><a className="box-content shadow-md  btn bg-[#212428]  text-white border-[#212428] hover:bg-slate-900 hover:border-[#212428] hover:-translate-y-1  shadow-slate-500 text-center cursor-not-allowed" href=""><RiReactjsFill size={'25'} /></a></div>

              <div>  <a className="box-content shadow-md  btn bg-[#212428]  text-white border-[#212428] hover:bg-slate-900 hover:border-[#212428] hover:-translate-y-1  shadow-slate-500 text-center cursor-not-allowed" href=""><RiNextjsFill size={'25'} /></a></div>

              <div>  <a className="box-content shadow-md  btn bg-[#212428]  text-white border-[#212428] hover:bg-slate-900 hover:border-[#212428] hover:-translate-y-1  shadow-slate-500 text-center cursor-not-allowed" href=""><FaJs size={'25'} /></a></div>
            </div>
          </div>
        </div>
        
    );
};

export default FineMe;