import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Projecten from "./components/pages/Projecten/Projecten";
import VerticalDetail from "./components/pages/VerticalDetail/VerticalDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/design",
        element: <Projecten />
    },
    {
        path: "/fotografie",
        element: <Projecten />
    },
    {
        path: "/detail/:project/vertical/:name",
        element: <VerticalDetail />
    },
    // {
    //     path: "/detail/horizontal/:name",
    //     element: <HorizontalDetail />
    // }
])

export default router