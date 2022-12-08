import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./components/CardComponent.js";
import data from "./utils/data.json";
import { title } from "./utils/constants.js";
import SearchBar from "./components/SearchBar.js";
import { useState, useEffect } from "react";
import NoResultsComponent from "./components/NoResultsComponent.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import AboutUs from "./components/AboutUs.js";
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurantComponent from "./components/RestaurantComponent.js";
import ProfileComponent from "./components/ProfileComponent.js";

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

// Dealing with Arrays, using a map
const CardContainer = ({ filtertedRestaurants }) =>
  !filtertedRestaurants.length ? (
    <NoResultsComponent />
  ) : (
    filtertedRestaurants.map((restaurant) => (
      <Link to={`/restaurant/${restaurant?.data?.id}`}>
        <CardComponent restraunt={restaurant} key={restaurant?.data?.id} />
      </Link>
    ))
  );

const SearchPageComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtertedRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div className="card-container">
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <CardContainer
        filtertedRestaurants={
          filtertedRestaurants.length ? filtertedRestaurants : listOfRestaurants
        }
      />
    </div>
  );
};

const AppLayout = () => (
  <>
    <HeadingComponent />
    <div className="body">
      <Outlet />
    </div>
  </>
);

const appRouter = createBrowserRouter([
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
        element: <SearchPageComponent />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
