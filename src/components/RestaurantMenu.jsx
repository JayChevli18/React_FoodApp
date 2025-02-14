import { useState, useEffect } from "react"
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId}=useParams();
    console.log(resId);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2156354&lng=72.63694149999999&restaurantId="+resId);
        const json = await data.json();
        setResInfo(json);
    }

    useEffect(() => {
        fetchMenu();
    }, [])


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