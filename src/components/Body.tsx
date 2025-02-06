import React, { ReactElement } from "react";
import RestaurantCard from "./RestaurantCard";

export const Body: React.FC = (): ReactElement => {
  return (
    <div className="body">
      <div className="search">Search bar</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
