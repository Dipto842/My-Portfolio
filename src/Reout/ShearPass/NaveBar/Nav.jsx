import { Link } from "react-router-dom";
import './Navecss.css'
import { FaDownload } from "react-icons/fa6";
import img from '../../../../public/IMG20230719185526-removebg-preview.png'
const Nav = () => {
  const downloadFile = () => {
    window.location.href='../../../../public/Dipto-resume.pdf'
  }
    const Navling = <>
    <ul className="text-2xl flex gap-7 ">
        <Link className=" text-2xl   hover:link hover:text-[#de0449]  " to={'/'}><li>Home</li></Link>
        <Link className=" text-2xl hover:link hover:text-[#de0449] " to={'/SKILLS'}><li>SKILLS </li></Link>
        <Link className=" text-2xl hover:link hover:text-[#de0449]" to={'/ABOUT'}><li>ABOUT</li></Link>
        <Link className=" text-2xl hover:link hover:text-[#de0449]" to={'/PORTFOLIO'}><li>PORTFOLIO </li></Link>
        <Link className=" text-2xl hover:link hover:text-[#de0449] " to={'/Education'}><li>Education </li></Link>
      
        <Link className=" text-2xl hover:link hover:text-[#de0449] " to={'/CONTACTS'}><li>CONTACTS</li></Link>
    </ul>
    
    </>
        
    
    return (
        <div>
            <div className="navbar bg-[#212428] text-stone-300 font1 font-bold flex flex-1 items-center justify-evenly ">
  <div className="navbar-">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>{
            Navling
            }
            
        </li>
      </ul>
    </div>
    <div className="avatar">
  <div className="w-14 rounded-full border-2 bg-amber-300 border-rose-500   mt-1">
    <img src={img} />
  </div>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  flex flex-1 items-center">
      <li>{
        Navling
        }</li>
    </ul>
  </div>
  <div className="navbar-">
  
    <button  onClick={downloadFile} className="flex gap-3 items-center text-2xl bg-[#212428] text-[#e6034b] hover:bg-[#0f172a]  hover:shadow-inner  w-36 h-10 shadow-lg rounded-md hover:rounded-xl fo justify-center  hover: hover:shadow-black   hover:text-xl ">Resume  <span><FaDownload /></span>  </button>
  
   
  </div>
</div>
        </div>
    );
};

export default Nav;