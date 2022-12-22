import { useSelector } from "react-redux";
import FoodItem from "./FoodItem.js";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart.value.length) return <h1>No cart Items</h1>;
  return cart.value.map((cartItem) => <FoodItem item={cartItem} />);
};

export default Cart;
