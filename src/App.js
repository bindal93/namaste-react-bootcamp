import React, { lazy, Suspense } from "react";
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
// import AboutUs from "./components/AboutUs.js";

const AboutUs = lazy(() => import("./components/AboutUs.js"));
const RestaurantComponent = lazy(() =>
  import("./components/RestaurantComponent.js")
);
const SearchPageComponent = lazy(() =>
  import("./components/SearchPageComponent.js")
);

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <Link to="/">
      <h2>{title}</h2>
    </Link>
    <Link to="about-us">
      <span>About Us</span>
    </Link>
    <Link to="search">
      <span>Search</span>
    </Link>
  </div>
);

const NoResultsComponent = lazy(() =>
  import("./components/NoResultsComponent.js")
);

// Dealing with Arrays, using a map
export const CardContainer = ({ filtertedRestaurants }) =>
  !filtertedRestaurants.length ? (
    <h1 key="sfds">No restaurant found!</h1>
  ) : (
    filtertedRestaurants.map((restaurant) => (
      <Link
        key={restaurant?.data?.id}
        to={`/restaurant/${restaurant?.data?.id}`}
      >
        <CardComponent restraunt={restaurant} key={restaurant?.data?.id} />
      </Link>
    ))
  );

const AppLayout = () => (
  <>
    <HeadingComponent />
    <Outlet />
  </>
);

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
