import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    getResInfo();
  }, []);

  async function getResInfo() {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId,
    );
    const res = await data.json();
    console.log(res?.data?.cards[2]?.card?.card?.info);

    const allCards =
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuCategories = allCards?.filter((c) =>
      c?.card?.card?.["@type"]?.includes("ItemCategory"),
    );

    console.log(menuCategories);
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setResMenu(menuCategories);
  }

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
