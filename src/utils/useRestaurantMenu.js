import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

export const useRestaurantMenu= (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json);
    }

    useEffect(() => {
        fetchMenu();
    }, [])
    return resInfo;
}