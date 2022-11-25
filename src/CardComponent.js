const CardComponent = ({ restraunt }) => {
  const { img, name, cusine, stars } = restraunt;
  return (
    <div id="card" className="card">
      <img src={img} />
      <h2>{name}</h2>
      <h3>{cusine}</h3>
      <h4>{stars} stars</h4>
    </div>
  );
};

export default CardComponent;
