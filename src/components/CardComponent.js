import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const CardComponent = ({ restraunt, stateName }) => {
  const { theme } = useContext(ThemeContext);
  if (!restraunt?.data) return null;
  console.log(restraunt?.data);

  const { name, cuisines, avgRating, cloudinaryImageId } = restraunt?.data;
  return (
    <div id="card" className="card w-52 bg-purple-50 rounded-xl p-8 h-auto m-4">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold font-sans">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5>{stateName}</h5>
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
