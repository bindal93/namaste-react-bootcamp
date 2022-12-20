import { title } from "../utils/constants.js";
import { Link } from "react-router-dom";

const HeadingComponent = () => {
  return (
    <div
      id="title"
      className="px-10 py-4 flex justify-between bg-pink-50"
      tabIndex="1"
    >
      <Link to="/">
        <img
          className="h-10"
          src="https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png"
        />
      </Link>
      <div className="flex space-x-4 content-center">
        <Link to="/search">
          <span>Search</span>
        </Link>
        <Link to="/about-us">
          <span>AboutUs</span>
        </Link>
        <Link to="/about-us">
          <span>Contact Us</span>
        </Link>
        <Link to="/about-us">
          <span>Support</span>
        </Link>
      </div>
    </div>
  );
};

export default HeadingComponent;
