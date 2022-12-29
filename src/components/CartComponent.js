import { useSelector } from "react-redux";
import FoodItem from "./FoodItem.js";

const CartComponent = () => {
  const cart = useSelector((state) => state.cart.value);
  return (
    <>
      <h1 data-testid="cart">Cart Page</h1>
      {cart.map((item) => (
        <FoodItem item={item} isCartPage={true} />
      ))}
    </>
  );
};

export default CartComponent;
