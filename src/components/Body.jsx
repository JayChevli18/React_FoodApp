import React, { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { Shimmer } from "./Shimmer";

export const Body = () => {

    const [restaurantList, setRestaurantList]=useState(resList);

    const filter=()=>{
        const filterList=restaurantList.filter((res)=>res.info.avgRating>4.2);
        setRestaurantList(filterList);
    }

    if(restaurantList===0){
        return <Shimmer></Shimmer>
    }

    return (
        <div className='body'>
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={filter}
                >
                    Top Rated Restaurants
                </button>
            </div>
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

