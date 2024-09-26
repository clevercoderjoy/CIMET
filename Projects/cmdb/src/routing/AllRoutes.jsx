import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from '../pages/Explore';
import { HomeLoader } from "../loaders/HomeLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: HomeLoader
      },
      {
        path: "explore",
        children: [
          {
            path: "movies",
            element: <Explore />,
          },
          {
            path: "tv",
            element: <Explore />,
          },
        ]
      },
    ]
  }
]);
