import { title } from "../utils/constants.js";
import { Link } from "react-router-dom";
import UserContext from "./UserContext.js";

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
    <UserContext.Consumer>
      {(obj) => (
        <>
          <h1>{obj.name}</h1>
          <button onClick={() => obj.updateName("Updated AKshay")}>
            Update
          </button>
        </>
      )}
    </UserContext.Consumer>
  </div>
);

export default HeadingComponent;
