import { useState, useEffect } from "react"

const useResturantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

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

  return [resInfo, resMenu]

}


export default useResturantMenu;