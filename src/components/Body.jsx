import React, { useEffect, useState, useContext } from "react";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
// import {} from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext  } from "../utils/UserContext";

export const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState("");
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    const {setUserName, loggedInUser}=useContext(UserContext);

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
        // console.log(json);
        
        setRestaurantList(restaurants);
        setFilteredRestaurant(restaurants);
    }

    if (useOnlineStatus() === false) {
        return (
            <h1>OOPS! No Internet Connection....Seems Like You Are Offline</h1>
        )
    }

    if (restaurantList.length === 0) {
        return <Shimmer></Shimmer>;
    }

    return (
        <div className='body'>
            <div className="flex">
                <div className='m-4 p-4'>
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
                <div className="m-4 p-4 flex items-center" >
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={filter}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center" >
                    <input
                        type="text"
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        value={loggedInUser}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>

            </div>
            <div className='flex flex-wrap'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                        >
                            {restaurant?.info?.veg===undefined ?
                                (
                                    <RestaurantCardPromoted key={restaurant.info.id} restaurantData={restaurant} />
                                ):(
                                    <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
                                )
                            }
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

