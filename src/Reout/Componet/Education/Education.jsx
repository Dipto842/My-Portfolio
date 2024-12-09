import img from '../../../../public/download (1).png'
import img1 from '../../../../public/2023-07-25.jpg'
import img2 from '../../../../public/2022-11-18.jpg'

const Education = () => {
    return (
        <div className="">
        
          <h1 className='text-2xl text-white text-center mt-'>Education <span className=' text-center mx-auto'><div className='border-[#ff014f] border w-24 mb-6 mx-auto'></div></span></h1>
          <h1 className="text-5xl  text-white text-center">My Education</h1>
          <div className="text-white flex">
            
            <div className="card ml-[300px] mt-24 bg-[#212428]  w-[500px]   h-[470px]  shadow-xl shadow-[#373738]">

            <figure>
    <img
    className="w-[31rem] bg-yellow-100 "
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    National University, BD
    
    </h2>
    <p>  Bachelor of Social Science (BSS)   </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline text-[#ff014f]">Running      </div>
    
    </div>
  </div>

            </div>

            <div className="border-2-2  md:block border  border-opacity-20 border-gray-100 lg:h-[1290px]  absolute left-1/2 mt-28 "></div>
            {/* 2 */}
            <div className="ml-[600px]">
            <div className="card bg-[#212428] lg:relative right-48 top-24 lg:w-[500px]   lg:h-[470px]  mt-96 shadow-xl shadow-[#373738]">

            <figure>
    <img
    className=""
      src={img2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Nakalia Monjur Kader
    Degree College
    </h2>
    <p>Humanities , HSC </p>
    <p>Pass(2023)
    </p>
    <p>session (2021-2022 )</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline  text-[#ff014f]">pass</div>
      
    </div>
  </div>
            </div>
            {/* 3 */}
            <div className="card bg-[#212428] lg:relative right-[1100px] -top-[300px] lg:w-[500px]   lg:h-[470px]  mt-96 shadow-xl shadow-[#373738]">

            <figure>
    <img
    className=""
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Punduria High School,
Santhia, pabna.
    </h2>
    <p>Science, SSC</p>
    <p> pass(2021)</p>
    <p> session(2019 - 2020 )</p>
    <div className="card-actions justify-end">
    <div className="badge badge-outline  text-[#ff014f]">pass</div>
   
    </div>
  </div>
            </div>

            </div>
          </div>
        </div>
    );
};

export default Education;