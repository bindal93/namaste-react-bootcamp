import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import data from "./data.json";
import { title } from "./constants.js";
import SearchBar from "./SearchBar.js";
import { useState, useEffect } from "react";
import NoResultsComponent from "./NoResultsComponent.js";

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
      <CardComponent restraunt={restaurant} key={restaurant.id} />
    ))
  );

const BodyComponent = () => {
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
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
