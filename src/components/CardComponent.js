import ThemeContext from "./ThemeContext";
import { useContext } from "react";
const CardComponent = ({ restraunt }) => {
  //const { img, name, cusine, stars } = restraunt;

  console.log(restraunt);
  if (!restraunt?.data) return null;
  console.log(restraunt?.data);
  const { theme, setTheme } = useContext(ThemeContext);

  const { name, cuisines, avgRating, cloudinaryImageId } = restraunt?.data;
  return (
    <div
      id="card"
      className="card"
      style={{ backgroundColor: theme === "dark" ? "#000" : "#fff" }}
    >
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme{theme}
      </button>
    </div>
  );
};

export const BeautifulCardComponent = () => {
  return (
    <div className="style-container">
      <CardComponent />
    </div>
  );
};

export default CardComponent;
