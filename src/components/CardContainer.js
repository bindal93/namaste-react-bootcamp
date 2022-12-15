import CardComponent from "./CardComponent";
import NoResultsComponent from "./NoResultsComponent";
import { Link } from "react-router-dom";

// Dealing with Arrays, using a map
const CardContainer = ({ filtertedRestaurants }) =>
  !filtertedRestaurants.length ? (
    <NoResultsComponent />
  ) : (
    filtertedRestaurants.map((restaurant) => (
      <Link
        key={restaurant?.data?.id}
        to={`/restaurant/${restaurant?.data?.id}`}
      >
        <CardComponent restraunt={restaurant} key={restaurant?.data?.id} />
      </Link>
    ))
  );

export default CardContainer;
