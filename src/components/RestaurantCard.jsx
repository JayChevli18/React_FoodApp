import React from "react";
import { LOGO_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime, costForTwo } = restaurantData?.info;
  return (
    <div className='p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      <img
        className='rounded-lg'
        src={LOGO_URL + cloudinaryImageId}
        alt="food"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mintues</h4>
    </div>
  )
}

//Higher Order Component
//Takes Component as a parameter and then modifies it and then Return the component.
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // console.log("Called");
    return (
      <div>
        <label className="absolute bg-green-500  text-white m-2 p-2 rounded-lg">Veg</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    )
  }
}

//export default RestaurantCard