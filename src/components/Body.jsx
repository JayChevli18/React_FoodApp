import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

export const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
                    ))
                }

            </div>
        </div>
    )
}

