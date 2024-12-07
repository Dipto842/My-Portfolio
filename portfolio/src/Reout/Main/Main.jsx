import { Outlet } from "react-router-dom";
import Nav from "../ShearPass/NaveBar/Nav";
import Footer from "../ShearPass/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-[#212428] ">
            
            <Nav></Nav>
           <div className=" h-screen">
           <Outlet></Outlet>
           </div>
            <div >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;