import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./components/CardComponent.js";
import data from "./utils/data.json";
import { title } from "./utils/constants.js";
import SearchBar from "./components/SearchBar.js";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent.js";
// import RestaurantComponent from "./components/RestaurantComponent.js";
import ProfileComponent from "./components/ProfileComponent.js";
//import SearchPageComponent from "./components/SearchPageComponent.js";
import HeadingComponent from "./components/Header.js";
import UserContext from "./components/UserContext.js";
import ThemeContext from "./components/ThemeContext.js";

const AboutUs = lazy(() => import("./components/AboutUs.js"));
const RestaurantComponent = lazy(() =>
  import("./components/RestaurantComponent.js")
);
const SearchPageComponent = lazy(() =>
  import("./components/SearchPageComponent.js")
);

const AppLayout = () => {
  const [user, setUser] = useState("akshay");
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ name: user, updateName: setUser }}>
        <HeadingComponent />
        <div className="body">
          <Outlet />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

const router = createBrowserRouter([
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
            element: <ProfileComponent name={"Akshay Saini from props"} />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
