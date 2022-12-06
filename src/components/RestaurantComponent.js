import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const RestaurantComponent = () => {
  const [res, setRes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    test();
  }, []);

  async function test() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.29844139999999&lng=77.99313599999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRes(json);
  }
  return <CardComponent restraunt={res} />;
};
export default RestaurantComponent;
