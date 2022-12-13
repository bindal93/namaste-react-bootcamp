import { useState, useEffect } from "react";
import cityMap from "../utils/state-city.json";

const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log("fetch data", state);
    fetchCities();
    async function fetchCities() {
      //   const data = fetch(
      //     `https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`
      //   );
      //   const json = await (await data).json();

      const json = cityMap[state];

      setCities(json);
    }
  }, [state]);

  return cities;
};

export default useCities;
