import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from '../pages/Explore';
import { HomeLoader } from "../loaders/HomeLoader";
import ErrorPage from "../pages/ErrorPage";
import Search from '../pages/Search';
import ShowPage from '../pages/ShowPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
        loader: HomeLoader,
      },
      {
        element: <ShowPage />,
        path: ":id"
      },
      {
        path: "explore",
        children: [
          {
            path: "movies",
            element: <Explore />,
          },
          {
            path: "movies/:movieId",
            element: <ShowPage />,
          },
          {
            path: "tvshows",
            element: <Explore />,
          },
          {
            path: "tvshows/:tvshowId",
            element: <ShowPage />,
          },
        ],
      },
      {
        path: "search/:query",
        element: <Search />,
      },
    ]
  }
]);
