import { Outlet } from "react-router-dom";
import Nav from "../ShearPass/NaveBar/Nav";
import Footer from "../ShearPass/Footer/Footer";
import Home from "../Componet/Home/Home";


const Main = () => {
    return (
        <div className="bg-[#212428] ">
            
            <Nav></Nav>
           
           <Outlet></Outlet>
        
            
            <Footer></Footer>
           
        </div>
    );
};

export default Main;