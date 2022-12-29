import CartComponent from "../CardComponent";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { StaticRouter } from "react-router-dom/server";
import CardComponent from "../CardComponent";

test("Verify if Cart Loads", async () => {
  const cart = render(<CartComponent />);
});
