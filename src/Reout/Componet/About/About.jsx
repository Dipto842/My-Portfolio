import img from '../../../../public/IMG20230719185526-removebg-preview.png';
import '../Benar/Benar.css';

const About = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      {/* Heading */}
      <div className="text-white text-center mb-12">
        <h1 className="text-2xl font-medium">
          About me
          <span className="block">
            <div className="border-[#ff014f] border w-32 mt-2 mb-4 mx-auto"></div>
          </span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Who am I <span className="text-[#ff014f]">?</span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="text-white font2 text-justify max-w-3xl">
          <p className="leading-relaxed">
            I am a junior front-end developer. With a strong passion and love
            for technology and self-improvement, I have learned ReactJS,
            JavaScript, Tailwind CSS, Bootstrap, HTML, CSS, and responsive
            design principles for all devices. I’m also familiar with various
            packages, frameworks, and libraries.
            <br /><br />
            Additionally, I have started learning backend technologies like MongoDB,
            Node.js, Express.js, JWT, Firebase, Mongoose, and NoSQL databases.
            <br /><br />
            Outside of practice and project work, I continuously explore new
            technologies and love taking on new challenges. My next goal is to
            become a skilled full-stack developer.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            className="border-4 border-[#ff014f] bg-yellow-200 rounded-full w-56 h-56 sm:w-72 sm:h-72 object-cover"
            src={img}
            alt="Dipto Bakshi"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
