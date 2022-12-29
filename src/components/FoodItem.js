import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartSlice.js";

const FoodItem = ({ item, isCartPage }) => {
  if (!item) return null;

  const { restId, name, price, description, category, cloudinaryImageId } =
    item;

  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(addItem(item));
  };
  return (
    <li className="flex py-6" key={restId}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4">${price / 100}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500" data-testid="category">
            {category}
          </p>

          <div className="flex">
            {isCartPage ? (
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => dispatch(deleteItem())}
              >
                Remove
              </button>
            ) : (
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={addCartHandler}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default FoodItem;
