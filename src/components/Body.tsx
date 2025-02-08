import React, { ReactElement } from "react";
import resConfig from "../utils/config";
import RestaurantCard from "./RestaurantCard";
export const Body: React.FC = (): ReactElement => {
  return (
    <div className="body">
      <div className="search">Search bar</div>
      <div className="res-container">
        {resConfig.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines}
            deliveryTime={restaurant.info.sla.deliveryTime}
            avgRating={restaurant.info.avgRating}
            imgId={restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};
