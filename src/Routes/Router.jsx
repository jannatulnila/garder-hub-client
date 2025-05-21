import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ExploreGardeners from "../Pages/ExploreGardeners";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        children: [
            {
                path: "",
                element:<Home></Home>
            },
            {
                path: 'explore-gardeners',
                Component: ExploreGardeners,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: "/login",
                Component: Login,
            },

        ]
    },

    {
        path: "/*",
        element: <h2>error</h2>
    }
]);
export default router;