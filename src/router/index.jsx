import { createBrowserRouter } from "react-router-dom";
import LayoutPrivate from "../layout/LayoutPrivate";
import LayoutRoot from "../layout/LayoutRoot";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {                            // aqui van todas las rutas          
        path: '/',    
        element: <LayoutRoot/>,  // se hace el chldren ya que layau tiene todo el marco de la pag.
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/dashboard',
                element: <LayoutPrivate/>, // como tiene children todas las pag anidadas toman la confg del padre
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    }
                ]

            }
        ]
    }
])