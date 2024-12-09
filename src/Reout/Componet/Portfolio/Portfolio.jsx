import HoverVideoPlayer from "react-hover-video-player";

import "./About.css";
import { useEffect, useState } from "react";
import img from '../../../../public/Screenshot 2024-12-09 192101.png'
const Portfolio = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      });
  }, []);

  return (
    <div>
      <div className="text-white text-center mb-14 mt-10">
        <h1 className="text-2xl">
          My Portfolio
          <span className=" text-center mx-auto">
            <div className="border-[#ff014f] border w-32 mb-6 mx-auto"></div>
          </span>
        </h1>
        <h1 className="text-5xl mb-20">My recent works</h1>
      </div>
      {/* website */}
      <div>
        <div className="grid grid-cols-3 gap-10 mx-auto lg:w-[1500px] ">
          {/* 1 */}

          {data.map((Data) => (
            <div key={Data._id}>
              <div className=" bg-[#212428] box1 text-white w-full max-w-[500px] min-h-52 h-[670px] mb-28   mx-auto">
                <figure>
                  <HoverVideoPlayer
                    videoSrc={Data.video}
                    pausedOverlay={
                      <img
                        src={Data.imges}
                        alt=""
                        style={{
                          // Make the image expand to cover the video's dimensions
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    }
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                  />
                 
                </figure>
                <div className="card-body text-[#c4cfde] font3  ">
                  <h2 className="card-title font-bold">{Data.name}</h2>

                  <p>
                    
                    {Data.paragraph.lenght < 50
                      ? `${Data.paragraph}`
                      : `${Data.paragraph.slice(0, 80)}...`}
                  </p>
                 <hr className="opacity-20 mt-5" />
                 <div className="grid grid-cols-4 gap-3">
                  {Data.skills.map((skly , index)=><div className="badge badge-outline" key={index}>{skly}</div>)}
                 </div>
                 <hr className="opacity-20 mt-5 mb-3" />
                  <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                   <button className="items-center rounded-full  hover:text-[#e6034b] bg-[#212428]  shadow-inner lg:h-10     justify-center  shadow-black  text-lg  "><a href=''>overview</a></button>
                   <button className="items-center rounded-full  hover:text-[#e6034b] bg-[#212428]  shadow-inner lg:h-10     justify-center  shadow-black  text-lg  "><a href={Data.liveView}>liveView</a></button>
                   <button  className="items-center rounded-full  hover:text-[#e6034b] bg-[#212428]  shadow-inner lg:h-10     justify-center  shadow-black  text-lg  "><a href={Data.clientSide}>clientSide</a></button>
                   <button  className="items-center rounded-full  hover:text-[#e6034b] bg-[#212428]  shadow-inner lg:h-10     justify-center  shadow-black  text-lg  "><a href={Data.serverSide}>serverSide</a></button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
