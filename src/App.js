import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import AboutUs from "./components/AboutUs.js";
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurantComponent from "./components/RestaurantComponent.js";
import ProfileComponent from "./components/ProfileComponent.js";
//import SearchPageComponent from "./components/SearchPageComponent.js";
import HeadingComponent from "./components/Header.js";

const AboutUs = lazy(() => import("./components/AboutUs.js"));
const SearchPageComponent = lazy(() =>
  import("./components/SearchPageComponent.js")
);

const AppLayout = () => (
  <>
    <HeadingComponent />
    <div className="body">
      <Outlet />
    </div>
  </>
);

const routesConfig = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/restaurant/:id",
        element: <RestaurantComponent />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SearchPageComponent />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <ProfileComponent
                name={"Akshay Saini from the props"}
                xyz={123}
              />
            ),
          },
        ],
      },
    ],
  },
];

const appRouter = createBrowserRouter(routesConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
