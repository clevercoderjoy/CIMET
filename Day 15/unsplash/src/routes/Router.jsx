
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from "../App";
import Results from '../pages/results/Results';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "results",
        element: <Results />
      }
    ]
  }
])