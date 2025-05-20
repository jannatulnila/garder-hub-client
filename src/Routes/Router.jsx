import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ExploreGardeners from "../Pages/ExploreGardeners";

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts,
    children:[
        {
            path:'/register',
            Component: Register,
        },
        {
            path:"/login",
            Component: Login,
        },
        
    ]
  },
  {
            path: '/explore-gardeners',
            Component: ExploreGardeners,
        },
  {
    path:"/*",
    element:<h2>error</h2>
  }
]);
export default router;