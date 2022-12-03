import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";



export default function Routes(){
    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        }
    ])
}