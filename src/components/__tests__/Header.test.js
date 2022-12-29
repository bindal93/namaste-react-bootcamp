import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { StaticRouter } from "react-router-dom/server";

const logoUrl =
  "https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png";

test("Verify if Header Loads", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = await header.findByTestId("logo");

  expect(logo.src).toBe(logoUrl);
});

test("Verify if Header Loads", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  expect(header).toMatchSnapshot();
});
