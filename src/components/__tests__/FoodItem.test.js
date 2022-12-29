//import { sum } from "../sum";
import FoodItem from "../FoodItem";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { foodItemMock } from "../mocks/foodItemMock";

test("check sun", async () => {
  const foodItem = render(
    <Provider store={store}>
      <FoodItem item={foodItemMock} />
    </Provider>
  );

  const category = await foodItem.findByTestId("category");

  expect(category.textContent).toBe("Fried Rice");
});
