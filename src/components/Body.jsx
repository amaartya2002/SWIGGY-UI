import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListofResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState(false);

  console.log("Body Rendered");

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

        setFilteredResturants(
          finalData?.data?.data?.cards[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants,
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAPiData();
  }, []);

  if (filteredResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-body">
      <div className="res-body-header">
        <div className="res-search">
          <input
            type="text"
            placeholder="Name of resturant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              if (e.target.value === "") {
                setFilteredResturants(listOfResturants);
                setSearchRes(false);
              }
            }}
          ></input>
          <button
            onClick={() => {
              const searchedRes = listOfResturants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );

              if (searchedRes.length > 0) {
                setFilteredResturants(searchedRes);
                setSearchRes(false);
              } else {
                setSearchRes(true);
              }
            }}
          >
            Click
          </button>
        </div>
        <button
          className="res-filter"
          onClick={() => {
            setFilteredResturants(
              listOfResturants.filter(
                (res) => parseFloat(res.info.avgRating) >= 4.5,
              ),
            );
          }}
        >
          Search for top-rated resturants
        </button>
      </div>
      {searchRes ? (
        <h3>No such res exits</h3>
      ) : (
        <div className="res-container">
          {filteredResturants.map((resturant) => {
            return (
              <ResturantCard key={resturant.info.id} resCard={resturant} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
