import img from '../../../../public/download (1).png';
import img1 from '../../../../public/2023-07-25.jpg';
import img2 from '../../../../public/2022-11-18.jpg';

const Education = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-10">
      {/* Title */}
      <div className="text-white text-center mb-16">
        <h1 className="text-2xl">
          Education
          <span className="block">
            <div className="border-[#ff014f] border w-24 mt-2 mb-4 mx-auto"></div>
          </span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">My Education</h1>
      </div>

      {/* Timeline and Cards */}
      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full z-0"></div>

        {/* Education Cards */}
        <div className="space-y-20 w-full max-w-7xl z-10 ">
          {/* 1 - National University */}
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 lg:mr-[700px]">
            <div className="card bg-[#212428] w-full md:w-[500px] shadow-xl shadow-[#373738]">
              <figure>
                <img src={img} alt="University" className="w-full h-60 " />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">National University, BD</h2>
                <p>Bachelor of Social Science (BSS)</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-[#ff014f]">Running</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 - HSC */}
          <div className="flex flex-col md:flex-row-reverse items-center md:justify-center gap-10">
            <div className="card bg-[#212428] w-full md:w-[500px] shadow-xl shadow-[#373738] lg:ml-[700px]">
              <figure>
                <img src={img2} alt="College" className="w-full h-60 " />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Nakalia Monjur Kader Degree College</h2>
                <p>Humanities, HSC</p>
                <p>Pass (2023)</p>
                <p>Session (2021-2022)</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-[#ff014f]">Pass</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 - SSC */}
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
            <div className="card bg-[#212428] w-full md:w-[500px] shadow-xl shadow-[#373738] lg:mr-[700px]">
              <figure>
                <img src={img1} alt="School" className="w-full h-60 " />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Punduria High School, Santhia, Pabna</h2>
                <p>Science, SSC</p>
                <p>Pass (2021)</p>
                <p>Session (2019 - 2020)</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-[#ff014f]">Pass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Education;
