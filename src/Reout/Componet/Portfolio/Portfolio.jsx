import HoverVideoPlayer from "react-hover-video-player";
import "./About.css";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://my-portfolio-sarvar.onrender.com/Data")
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-20">
      <div className="text-white text-center mb-14 mt-10">
        <h1 className="text-2xl">
          My Portfolio
          <span className="block">
            <div className="border-[#ff014f] border w-32 mb-6 mx-auto"></div>
          </span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-20">My recent works</h1>
      </div>

      {/* website grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mx-auto max-w-[1500px]">
        {data.map((Data) => (
          <div key={Data._id}>
            <div className="bg-[#212428] box1 text-white w-full max-w-[500px] min-h-52 h-[670px] mb-20 mx-auto rounded-md overflow-hidden shadow-md">
              <figure className="h-[250px]">
                <HoverVideoPlayer
                  videoSrc={Data.video}
                  pausedOverlay={
                    <img
                      src={Data.imges}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </figure>

              <div className="card-body text-[#c4cfde] font3 px-5 py-4">
                <h2 className="card-title font-bold text-lg mb-2">{Data.name}</h2>

                <p className="text-sm mb-4">
                  {Data.paragraph.length < 50
                    ? Data.paragraph
                    : `${Data.paragraph.slice(0, 80)}...`}
                </p>

                <hr className="opacity-20 mt-3 mb-3" />

                <div className="flex flex-wrap gap-2 mb-4">
                  {Data.skills.map((skly, index) => (
                    <div
                      className="badge badge-outline border-gray-500 text-sm px-2 py-1"
                      key={index}
                    >
                      {skly}
                    </div>
                  ))}
                </div>

                <hr className="opacity-20 mb-3" />

                <div className="grid grid-cols-2 gap-4">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className="w-full rounded-full hover:text-[#e6034b] bg-[#212428] shadow-inner h-10 text-sm">
                      Overview
                    </button>
                  </a>

                  <a href={Data.liveView} target="_blank" rel="noopener noreferrer">
                    <button className="w-full rounded-full hover:text-[#e6034b] bg-[#212428] shadow-inner h-10 text-sm">
                      Live View
                    </button>
                  </a>

                  <a href={Data.clientSide} target="_blank" rel="noopener noreferrer">
                    <button className="w-full rounded-full hover:text-[#e6034b] bg-[#212428] shadow-inner h-10 text-sm">
                      Client Side
                    </button>
                  </a>

                  <a href={Data.serverSide} target="_blank" rel="noopener noreferrer">
                    <button className="w-full rounded-full hover:text-[#e6034b] bg-[#212428] shadow-inner h-10 text-sm">
                      Server Side
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
