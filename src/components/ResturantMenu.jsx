import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const { resId } = useParams();

  console.log(resId);

  const [resInfo, resMenu] = useResturantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, id, cuisines, costForTwoMessage, avgRating } = resInfo;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Menu : {cuisines.join(", ")}, {costForTwoMessage}
      </p>

      {resMenu?.map((category) => {
        const { title, itemCards } = category?.card?.card;
        return (
          <div key={title}>
            <h2>{title}</h2>
            <ul>
              {itemCards?.map((item) => {
                const { id, name, description, price, defaultPrice } =
                  item?.card?.info;
                return (
                  <li key={id}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>₹{(price || defaultPrice) / 100}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ResturantMenu;
