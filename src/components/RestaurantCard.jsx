import React from "react";
import { LOGO_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { cloudinaryImageId,name, avgRating, cuisines, deliveryTime, costForTwo } = restaurantData?.info;
  return (
    <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className='res-logo'
        src={LOGO_URL+cloudinaryImageId}
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mintues</h4>
    </div>
  )
}
