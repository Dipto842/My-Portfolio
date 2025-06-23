import './Contact.css';
import img from '../../../../public/contact.jpg';
import { useTypewriter } from 'react-simple-typewriter';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoLogoGithub } from 'react-icons/io';

const Contact = () => {
  const [text] = useTypewriter({
    words: [
      'Front-End Developer',
      'React JS Developer',
      'JR. Full-stack Developer',
      'MERN Stack',
    ],
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 2000,
    loop: 0,
  });

  return (
    <div className="px-4 md:px-8 lg:px-20 py-10">
      {/* Heading */}
      <div className="text-white text-center mb-14">
        <h1 className="text-2xl">
          Contact
          <span className="block">
            <div className="border-[#ff014f] border w-28 mb-4 mx-auto"></div>
          </span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Contact With Me</h1>
      </div>

      {/* Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#212428] rounded-md shadow-xl shadow-[#393a3b] p-8">
          <form className="space-y-6 text-white font-semibold">
            {/* Name & Number */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block mb-1">Your Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 bg-[#191b1e] border border-[#191b1e] focus:border-[#ff014f] rounded-md outline-none" required />
              </div>
              <div className="w-full">
                <label htmlFor="number" className="block mb-1">Your Number</label>
                <input type="text" id="number" className="w-full px-3 py-2 bg-[#191b1e] border border-[#191b1e] focus:border-[#ff014f] rounded-md outline-none" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1">Your Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 bg-[#191b1e] border border-[#191b1e] focus:border-[#ff014f] rounded-md outline-none" required />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <input type="text" id="subject" className="w-full px-3 py-2 bg-[#191b1e] border border-[#191b1e] focus:border-[#ff014f] rounded-md outline-none" required />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1">Your Message</label>
              <textarea id="message" rows="5" className="w-full px-3 py-2 bg-[#191b1e] border border-[#191b1e] focus:border-[#ff014f] rounded-md outline-none" required></textarea>
            </div>

            <button type="submit" className="w-full py-2 bg-[#191b1e] hover:text-[#ff014f] border border-[#191b1e] rounded-md transition duration-300">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Card */}
        <div className="w-full lg:w-[450px] bg-[#212428] rounded-md shadow-xl shadow-[#373738] overflow-hidden">
          <img src={img} alt="Contact" className="w-full h-64 object-cover" />
          <div className="p-6 text-white space-y-4">
            <h1 className="text-3xl font-bold">Dipto Bakshi</h1>
            <p className="opacity-80">{text} <span className="text-[#ff014f]">|</span></p>
            <p className="opacity-70">Connect with me through call. My contact number is:</p>
            <p className="opacity-85">Phone/WhatsApp: <span className="text-[#ff014f]">+880 1791620986</span></p>
            <p className="opacity-85">Email: <span className="text-[#ff014f]">diptobakshi72@gmail.com</span></p>

            <p className="text-xl mt-4">Find me on:</p>
            <div className="flex gap-6 mt-3">
              <a href="https://www.linkedin.com/in/dipto-bakshi" target="_blank" rel="noreferrer" className="btn bg-[#212428] text-white hover:bg-slate-900 shadow-md transition transform hover:-translate-y-1">
                <SlSocialLinkedin size={24} />
              </a>
              <a href="https://github.com/Dipto842" target="_blank" rel="noreferrer" className="btn bg-[#212428] text-white hover:bg-slate-900 shadow-md transition transform hover:-translate-y-1">
                <IoLogoGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
