import { useState } from "react";
import stateObj from "../utils/state-city.json";
import useCities from "./useCities";

const searchRestaurants = (searchText, listOfRestaurants) => {
  // Logic for searching inside data
  return listOfRestaurants.filter((res) =>
    res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  //const searchText = "Search";
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("Uttarakhand");
  const [cityName, setCityName] = useState("");

  const cityList = useCities(stateName);

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
        <select
          value={stateName}
          onChange={(e) => {
            setStateName(e.target.value);
          }}
        >
          {Object.keys(stateObj).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        >
          {cityList.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
