import { useState } from "react";
import data from "./data.json";

const searchRestaurants = (searchText) => {
  // Logic for searching inside data
  return data.filter((res) =>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setFilteredRestaurants }) => {
  //const searchText = "Search";
  const [searchText, setSearchText] = useState("Hello");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filtertedRestaurants = searchRestaurants(searchText);
          console.log(filtertedRestaurants);
          setFilteredRestaurants(filtertedRestaurants);
        }}
      >
        <input
          id="restaurant"
          placeholder="restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
