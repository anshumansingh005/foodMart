import React, { ReactElement } from "react";

const RestaurantCard: React.FC = (): ReactElement => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/8/77219eab-c0f4-4d51-b93b-ba8d06457d91_1018574%20(1).jpg"
      />
      <h3>Donne Biryani @99</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 ratings</h4>
      <h4>34 Minutes</h4>
    </div>
  );
};
export default RestaurantCard;
