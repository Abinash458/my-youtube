import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MaintainContainer from "./components/MaintainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: Body,
      children: [
        {
          path: "/",
          Component: MaintainContainer,
        },
        {
          path: "watch",
          Component: WatchPage,
        },
        {
          path: "demo",
          Component: Demo,
        },
      ],
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
