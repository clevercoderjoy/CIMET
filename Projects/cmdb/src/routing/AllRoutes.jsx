import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from '../pages/Explore';
import { HomeLoader } from "../loaders/HomeLoader";
import Search from '../pages/Search';
import Error from "../pages/Error";
import Show from './../pages/Show';
import { ExploreLoader } from "../loaders/ExploreLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: HomeLoader,
      },
      {
        path: "explore",
        children: [
          {
            index: true,
            element: <Error />,
          },
          {
            path: ":mediaType",
            element: <Explore />,
            loader: (e) => ExploreLoader(e),
            children: [
              {
                path: ":id",
                element: <Show />,
              }
            ]
          },
        ],
      },
      {
        path: "search",
        children: [
          {
            index: true,
            element: <Error />,
          },
          {
            path: ":query",
            element: <Search />,
            // loader: searchLoader,
          },
        ]
      },
      {
        path: "*",
        element: <Error />,
      }
    ]
  }
]);
