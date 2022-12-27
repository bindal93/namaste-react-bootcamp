import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "./cartSlice.js";
import FoodItem from "./FoodItem.js";

const RestaurantComponent = () => {
  const { id } = useParams();

  const [resInfo, setResInfo] = useState({});

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
    dispatch(
      addItem({
        name: "pizza",
      })
    );
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  if (!resInfo?.data) return null;

  return (
    <div className="flex">
      <div>
        <CardComponent restraunt={resInfo} />
        <button className="font-bold m-5 p-5 bg-green-50" onClick={addCartItem}>
          Add Item
        </button>
        <button
          className="font-bold m-5 p-5 bg-red-50"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
      </div>
      <div className="pl-10 pr-40">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Object.values(resInfo?.data?.menu?.items).map((item) => (
                <FoodItem item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantComponent;
