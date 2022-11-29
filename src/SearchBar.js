import { useState } from "react";
import data from "./data.json";

const searchRestaurants = (restaurant, cusine) => {
  console.log("Search logic for", restaurant, cusine);
  return data.filter((res) => res.name.includes(restaurant));
};

const SearchBarComponent = ({ setListOfRestaurant }) => {
  const [restaurant, setRestaurant] = useState("");
  const [cuisine, setCuisine] = useState("");
  return (
    <div id="search" className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setListOfRestaurant(searchRestaurants(restaurant, cuisine));
        }}
      >
        <input
          placeholder="restaurant"
          id="restaurant"
          value={restaurant}
          onChange={(e) => {
            setRestaurant(e.target.value);
          }}
        ></input>
        <input
          placeholder="cuisine"
          id="cuisine"
          value={cuisine}
          onChange={(e) => {
            setCuisine(e.target.value);
          }}
        ></input>
        <h1>{restaurant}</h1>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBarComponent;
