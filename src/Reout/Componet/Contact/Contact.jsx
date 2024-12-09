import './Contact.css'
import img from '../../../../public/contact.jpg'
import { useTypewriter } from 'react-simple-typewriter';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoLogoGithub } from 'react-icons/io';
const Contact = () => {
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
            <div className="text-white text-center mb-14 mt-10 font font-bold">
        <h1 className="text-2xl">
        Contact
          <span className=" text-center mx-auto">
            <div className="border-[#ff014f] border w-28 mb-6 mx-auto"></div>
          </span>
        </h1>
        <h1 className="text-5xl mb-20">Contact With Me</h1>
      </div>
      <div className='flex flex-row-reverse  justify-center gap-28 mx-auto items-center '>

{/* input */}
<div className="w-full md:w-1/2 lg:w-3/6 rounded-md bg-[#212428]  shadow-2xl shadow-[#393a3b] ">
<form className="card-body font font-bold space-y-11 text-white ">
        <div className='flex justify-between gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">YOUR NAME</span>
          </label>
          <input type="text"  className=" box-shadow w-full outline-none border border-[#191b1e] focus:border-rClr duration-300 px-3 py-2 bg-[#191b1e] rounded-md" required />
        </div>
        {/* 2 */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text  text-white">YOUR NUMBER</span>
          </label>
          <input type="number"  className="mt-0 box-shadow w-full outline-none border border-[#191b1e] focus:border-rClr duration-300 px-3 py-2 bg-[#191b1e] rounded-md" required />
        </div>
        </div>
   {/* 3 */}
       
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white">YOUR EMAIL</span>
          </label>
          <input type="email"  className=" box-shadow w-full outline-none border border-[#191b1e] focus:border-rClr duration-300 px-3 py-2 bg-[#191b1e] rounded-md" required />
        </div>
   {/* 4 */}
       
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white">SUBJECT</span>
          </label>
          <input type="email"  className=" box-shadow w-full outline-none border border-[#191b1e] focus:border-rClr duration-300 px-3 py-2 bg-[#191b1e] rounded-md" required />
        </div>
   {/* 5 */}
  
       
        <div className="form-control ">
          <label className="label">
            <span className="label-text  text-white">YOUR MESSAGE</span>
          </label>
          <input type="email"  className=" box-shadow textarea  textarea-lg h-28 w-full   outline-none border border-[#191b1e] focus:border-rClr duration-300 px-3 py-2 bg-[#191b1e] rounded-md" required />
        </div>
   {/* 6 */}
   <div>
    <button className=' box-shadow w-full outline-none border border-[#191b1e] hover:text-rose-600 focus:border-rClr duration-300 px-3 py-2 bg-[#191b1e] rounded-md  text-white  '>SEND MESSAGE</button>
   </div>
</form>
</div>

{/* crid */}

<div>
<div className="card bg-[#212428]  lg:w-[500px]   lg:h-[600px]   shadow-xl shadow-[#373738]">

<figure>
<img
className=""
src={img}
alt="Shoes" />
</figure>
<div className="card-body text-white ">
<h2 className="card-title text-white ">
<h1 className='text-3xl'>Dipto Bokshi</h1>
</h2>
<p className='mb-5 opacity-75'> {text} <span className="text-[#ff014f] opacity-80">|</span> </p>
<p className='opacity-70'>Connect with me through  call .  My contact number is </p>
<p className='opacity-75'> Phone/WhatsApp:+880 1791620986</p>
<p className='opacity-75'>  Email: diptobakshi72@gmail.com</p>

<p className='text-xl opacity-85'>Find with me</p>
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
</div>
</div>
</div>



      </div>
        
    );
};

export default Contact;