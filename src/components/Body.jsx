import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListofResturants] = useState([]);

  const fetchAPiData = () => {
    fetch("https://namastedev.com/api/v1/listRestaurants")
      .then((res) => {
        return res.json();
      })
      .then((finalData) => {
        setListofResturants(
          finalData?.data?.data?.cards[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants,
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAPiData();
  }, []);

  if (listOfResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-body">
      <button
        className="res-filter"
        onClick={() => {
          setListofResturants(
            resList.filter((res) => parseFloat(res.info.avgRating) >= 4.5),
          );
        }}
      >
        Search for top-rated resturants
      </button>
      <div className="res-container">
        {listOfResturants.map((resturant) => {
          return <ResturantCard key={resturant.info.id} resCard={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
