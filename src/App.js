import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import data from "./data.json";
import { title } from "./constants.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

// Dealing with Arrays, using a map
const CardContainer = ({ filtertedRestaurants }) =>
  filtertedRestaurants.map((restaurant) => (
    <CardComponent restraunt={restaurant} key={restaurant.id} />
  ));

const BodyComponent = () => {
  const [filtertedRestaurants, setFilteredRestaurants] = useState(data);

  return (
    <div className="card-container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
      <CardContainer filtertedRestaurants={filtertedRestaurants} />
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
