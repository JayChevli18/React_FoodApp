import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

export const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex]=useState(0);

    if (resInfo === null) {
        return (<Shimmer></Shimmer>);
    }
    const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info;

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log("X", categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg ">
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {
                categories.map((category, index) => (
                    //Controlled Component as RestaurantMenu(Parent) is Controlling the RestaurantCategory(Child) by passing states(showItems & setShowIndex)
                    //Also We are implementing lifting state up in this.
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card.card}
                        showItems={index===showIndex?true : false}
                        setShowIndex={()=>setShowIndex(index)}
                    />
                ))
            }
        </div>
    )
}