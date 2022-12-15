import { useEffect, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import UserContext from "./UserContext";

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

    //console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  const obj = useContext(UserContext);

  return (
    <div className="card-container">
      <button onClick={() => obj.updateName("Search Akshay update")}>
        Update from Search : {obj.name}
      </button>
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

export default SearchPageComponent;
