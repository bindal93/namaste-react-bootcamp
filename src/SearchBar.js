import { useState } from "react";
import data from "./data.json";

const searchRestaurants = (searchText, listOfRestaurants) => {
  // Logic for searching inside data
  return listOfRestaurants.filter((res) =>
    res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  //const searchText = "Search";
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filtertedRestaurants = searchRestaurants(
            searchText,
            listOfRestaurants
          );
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
