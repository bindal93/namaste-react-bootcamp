import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import data from "./data.json";
import SearchBarComponent from "./SearchBar.js";
import { useState } from "react";

const title = "Hunger Hub";

const HeadingComponent = () => (
  <>
    <div id="title" className="title-class" tabIndex="1">
      <h2>{title}</h2>
    </div>
  </>
);

// Dealing with Arrays, using a map
const CardContainer = ({ listOfRestaurants }) => {
  console.log(listOfRestaurants);
  return listOfRestaurants.map((restaurant) => (
    <CardComponent restraunt={restaurant} key={restaurant.id} />
  ));
};

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(data);
  return (
    <div className="card-container">
      <SearchBarComponent setListOfRestaurant={setListOfRestaurant} />
      <CardContainer listOfRestaurants={listOfRestaurants} />
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
