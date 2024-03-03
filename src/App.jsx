import './App.css'
import {createHashRouter, Navigate, RouterProvider} from "react-router-dom";
import Home, {action as homeAction} from "./routes/Home.jsx";
import LastSearch, {loader as trendLoader} from "./routes/LastSearch.jsx";
import GifList, {loader as gifsLoader} from "./routes/GifList.jsx";
import GifDetail from "./routes/GifDetail.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
        action: homeAction,
        children: [
            {
                index: true,
                element: <Navigate to={"home"}/>
            },
            {
                path: "home",
                element: <LastSearch/>,
                loader: trendLoader
            },
            {
                path: "search/:keyword",
                element: <GifList/>,
                loader: gifsLoader
            },
            {
                path: "gif/:id",
                element: <GifDetail/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App;
