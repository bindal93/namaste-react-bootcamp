const CardComponent = ({ restraunt }) => {
  const { img, stars } = restraunt;
  console.log(restraunt);
  if (!restraunt.data) return null;

  const {
    name,
    cuisines: cusine,
    avgRating,
    cloudinaryImageId,
  } = restraunt?.data;
  return (
    <div id="card" className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cusine.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
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
