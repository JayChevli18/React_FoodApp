import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState("");


    const filter = () => {
        const filterList = restaurantList.filter((res) => res.info.avgRating > 4.2);
        setRestaurantList(filterList);
        setFilteredRestaurant(filterList);
    }


    useEffect(() => {
        fetchData();
    }, []);
 
 
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurantList(restaurants);
        setFilteredRestaurant(restaurants);
    }

    if(useOnlineStatus()===false){
        return(
            <h1>OOPS! No Internet Connection....Seems Like You Are Offline</h1>
        )
    }
 
    if (restaurantList.length === 0) {
        return <Shimmer></Shimmer>;
    }

    return (
        <div className='body'>
            <div className="filter">
                <div className='search'>
                    <input
                        type="text"
                        className="search-box"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = restaurantList.filter((res) => {
                                const result = res.info?.name.toLowerCase().includes(search.toLowerCase());
                                return result;
                            }
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={filter}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/"+ restaurant.info.id}
                        >
                            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

