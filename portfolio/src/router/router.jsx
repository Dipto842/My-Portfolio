import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Reout/Main/Main";
import Home from "../Reout/Componet/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element:<div ><Main ></Main></div>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router