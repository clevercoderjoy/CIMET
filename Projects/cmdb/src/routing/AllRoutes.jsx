import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from '../pages/Explore';
import { HomeLoader } from "../loaders/HomeLoader";
import Search from '../pages/SearchResults';
import Error from "../pages/Error";
import Show from './../pages/Show';
import { ExploreLoader } from "../loaders/ExploreLoader";
import { SearchLoader } from "../loaders/SearchLoader";
import SearchResults from "../pages/SearchResults";

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
          },
        ],
      },
      {
        path: "show/",
        element: <Show />
        // loader: ShowLoader,
      },
      {
        path: "search",
        element: <SearchResults />,
        loader: SearchLoader,
      },
      {
        path: "*",
        element: <Error />,
      }
    ]
  }
]);
