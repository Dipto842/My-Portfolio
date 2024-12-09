import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Reout/Main/Main";
import Home from "../Reout/Componet/Home/Home";
import Sklys from "../Reout/Componet/Sklys/Sklys";
import About from "../Reout/Componet/About/About";
import Portfolio from "../Reout/Componet/Portfolio/Portfolio";
import Education from "../Reout/Componet/Education/Education";
import Contact from "../Reout/Componet/Contact/Contact";




const router = createBrowserRouter([
    {
      path: "/",
      element:<div ><Main ></Main></div>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/SKILLS',
          element:<Sklys></Sklys>
        },
        {
          path:'/ABOUT',
          element:<About></About>
        },
        {
          path:'/PORTFOLIO',
          element:<Portfolio></Portfolio>
        },
        {
          path:'/Education',
          element:<Education></Education>
        },
        {
          path:'/CONTACTS',
          element:<Contact></Contact>
        }
     
      ]
    },
  ]);

  export default router