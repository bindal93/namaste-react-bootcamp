import { useState } from "react";
import data from "./data.json";

const searchRestaurants = (searchText, listOfRestaurants) => {
  // Logic for searching inside data
  return listOfRestaurants.filter((res) =>
    res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setFilteredRestaurants, listOfRestaurants }) => {
  //const searchText = "Search";
  const [searchText, setSearchText] = useState("Hello");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filtertedList = searchRestaurants(
            searchText,
            listOfRestaurants
          );
          console.log(filtertedList);
          setFilteredRestaurants(filtertedList);
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
