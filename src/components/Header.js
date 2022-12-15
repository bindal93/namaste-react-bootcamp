import { title } from "../utils/constants.js";
import { Link } from "react-router-dom";

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <Link to="/">
      <h2>{title}</h2>
    </Link>
    <Link to="/search">
      <span>Search</span>
    </Link>
    <Link to="/about-us">
      <span>AboutUs</span>
    </Link>
  </div>
);

export default HeadingComponent;
