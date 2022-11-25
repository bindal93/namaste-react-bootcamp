import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";

const title = "Hunger Hub";

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

const data = [
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x7uyth98klateehaavbt",
    name: "Biryani By kilo",
    cusine: "Biryani, Hyderabadi",
    stars: 4,
    id: "sbkhjfbfdhjbvhjdb",
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ssz46edn5w8z4xpxbfxv",
    name: "Mughal Darbar",
    cusine: "Biryani, Hyderabadi",
    stars: 4,
    id: "nvdkjbhfb",
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jbtwi5gn0rqott22goqm",
    name: "Doon DArbar",
    cusine: "Biryani, Hyderabadi",
    stars: 4,
    id: "nkdvbndhb",
  },
];

// Dealing with Arrays, using a map
const CardContainer = () =>
  data.map((restaurant) => (
    <CardComponent restraunt={restaurant} key={restaurant.id} />
  ));

const BodyComponent = () => (
  <div className="card-container">
    <CardContainer />
  </div>
);

const AppLayout = () => (
  <>
    <HeadingComponent />
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
