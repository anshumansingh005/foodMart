import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
interface RestaurantInfo {
  id: string;
  name: string;
  cloudinaryImageId: string;
  cuisines: string[];
  sla: {
    deliveryTime: number;
  };
  avgRating?: number;
}
interface Restaurant {
  info: RestaurantInfo;
}

interface APIResponse {
  data?: {
    cards?: Array<{
      card?: {
        card?: {
          gridElements?: {
            infoWithStyle?: {
              restaurants?: Restaurant[];
            };
          };
        };
      };
    }>;
  };
}
export const Body: React.FC = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const SWIGGY_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    fetchData();
    console.log("Fetching data");
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json: APIResponse = await data.json();
      console.log(
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      const restaurantsData =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    }
  };
  const handleFilterClick = () => {
    listOfRestaurants.filter(
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
            name={restaurant.info.name}
            key={restaurant.info.id}
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
