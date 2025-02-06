import React from "react";

interface RestaurantCardProps {
  name: string;
  cuisine: string[] | [];
  imgId?: string;
  avgRating: number | undefined;
  deliveryTime: number;
}
const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  cuisine,
  imgId,
  avgRating,
  deliveryTime,
}) => {
  const baseUrl: string = `https://media-assets.swiggy.com/swiggy/image/upload/`;

  const imgSrc = `${baseUrl}${imgId}`;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="logo" src={imgSrc} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
