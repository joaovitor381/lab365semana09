import { createBrowserRouter } from "react-router-dom";
import { QuemSou } from "./pages/QuemSou";
import { Home } from "./pages/Home";

import { App } from "./App";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
    ],
  },
]);
