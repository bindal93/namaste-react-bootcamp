import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";
import Menu from "./Menu";

const RestaurantComponent = () => {
  const { id } = useParams();

  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  async function fetchRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.29844139999999&lng=77.99313599999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  }

  const dispatch = useDispatch();

  const addCartItem = () => {
    dispatch(addItem({ name: "Biryani" }));
  };

  return (
    <div className="flex">
      <div className="">
        <button className="p-4 m-4 bg-blue-50 font-bold" onClick={addCartItem}>
          Add Item to Cart
        </button>
        <CardComponent restraunt={resInfo} />
      </div>
      <div className="px-5">
        <Menu menuItems={resInfo?.data?.menu?.items} />
      </div>
    </div>
  );
};

export default RestaurantComponent;
