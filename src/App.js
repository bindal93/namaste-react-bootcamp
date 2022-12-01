import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import data from "./data.json";
import { title } from "./constants.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import { useEffect } from "react";

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

// Dealing with Arrays, using a map
const CardContainer = ({ filtertedRestaurants }) =>
  !filtertedRestaurants.length ? (
    <h1 key="sfds">No restaurant found!</h1>
  ) : (
    filtertedRestaurants.map((restaurant) => {
      console.log(restaurant.data?.id);
      return (
        <CardComponent restraunt={restaurant} key={restaurant?.data?.id} />
      );
    })
  );

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtertedRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json.data.cards[2].data.data.cards);
    setListOfRestaurants(json.data.cards[2].data.data.cards);
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
    {new Date().getHours() < 22 && <BodyComponent />}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
