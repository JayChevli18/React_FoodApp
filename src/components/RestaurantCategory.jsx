import { useState } from "react"
import { ItemList } from "./ItemList"

export const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // const [showItems, setShowItems]=useState(false);
    //This is the child component of RestaurantMenu.
    //And we are passing props from child to parent - Lifting State up.
    //For Accordion
    const handleClick=()=>{
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 p-4 mx-auto my-8 bg-gray-100 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>▼</span>
                </div>
                {showItems &&  <ItemList items={data.itemCards}></ItemList>}
            </div>

        </div>
    )
}