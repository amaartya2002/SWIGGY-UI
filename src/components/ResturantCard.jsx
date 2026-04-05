import CDN_URL from "../utils/common";

const ResturantCard = (props) => {
  const { resCard } = props;
  //console.log(resCard);
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resCard?.info;
  const { deliveryTime } = resCard?.info?.sla;

  return (
    <div className="res-card">
      <div className="res-card-img">
        <img src={CDN_URL + cloudinaryImageId} alt="res-img"></img>
      </div>
      <div className="res-card-info">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p className="rating">
          ⭐ {avgRating} • {deliveryTime} mins • {costForTwo}{" "}
        </p>
      </div>
    </div>
  );
};

export default ResturantCard;
