import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const FoodItem = ({ item }) => {
  if (!item) return null;

  const { name, description, cloudinaryImageId, price } = item;

  const dispatch = useDispatch();

  return (
    <li className="flex py-6" key={item.id}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            item.cloudinaryImageId
          }
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item.name}</a>
            </h3>
            <p className="ml-4">₹{item.price / 100}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">{item.description}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => dispatch(addItem(item))}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FoodItem;
