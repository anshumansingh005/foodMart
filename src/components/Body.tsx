import React, { useState } from "react";
import resConfig from "../utils/config";
import RestaurantCard from "./RestaurantCard";
export const Body: React.FC = () => {
  const URL = "https://github.com/anshumansingh005/";
  let promise = fetch(URL);
  console.log(promise);

  const [listOfRestaurants, setListOfRestaurants] = useState(resConfig);
  const handleFilterClick = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating !== undefined && res.info.avgRating > 4
    );

    setListOfRestaurants(filteredRestaurants);
  };
  return (
    <div className="body">
      <button className="search" onClick={handleFilterClick}>
        Filter
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines}
            deliveryTime={restaurant.info.sla.deliveryTime}
            avgRating={restaurant.info.avgRating ?? 0}
            imgId={restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};
