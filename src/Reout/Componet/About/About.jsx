import img from '../../../../public/IMG20230719185526-removebg-preview.png'
import '../Benar/Benar.css'
const About = () => {
    return (
        <div>
              <div className="text-white text-center  mt-10">
       
      
      </div>
            
            <div className='flex items-center justify-center gap-28'>
                <div  >
                    <img className='border-4 rounded-full border-[#ff014f]  bg-yellow-200 w-[300px]'  src={img} alt="" />
                </div>

                <div className='text-white font2 w-[46rem]'>
                <h1 className="text-2xl">
                About me
          <span className=" text-center mx-auto">
            <div className="border-[#ff014f] border w-32   mb-5"></div>
          </span>
        </h1>
                <h1 className="text-5xl mb-3">Who am i <span className='text-[#ff014f]'>?</span></h1>
                    <h1>I am a junior front-end developer. Strong passion, love and self-improvement for technology and coding so far Fontend has learned - ReactJS, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS also mobile responsive, all device responsive and various packages, frameworks, libraries. Also learned and learning for backend - MongoDB, NodeJS, Express.js, JWT, and Firebase , Mongoose , NoSQL.

Besides practice and work, I am constantly learning new things and love learning new technologies. I like taking on new challenges. My next target is to become a very good full-stack developer.</h1>
                </div>
            </div>
        </div>
    );
};

export default About;