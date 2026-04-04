import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfResturants, setListofResturants] = useState(resList);

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
