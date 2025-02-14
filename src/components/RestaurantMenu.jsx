import { useState, useEffect } from "react"
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {

    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);


    if(resInfo===null){
        return (<Shimmer></Shimmer>);
    }
    const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info;

    return (
        <div>  
            {name}
        </div>
    )
}