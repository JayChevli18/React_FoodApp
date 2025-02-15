import { useDispatch } from "react-redux"
import { LOGO_URL } from "../utils/constants"
import { addItems } from "../utils/cartSlice";
export const ItemList = ({ items }) => {

    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItems(item));        
    }

    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">    
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 relative">
                        <div className="absolute  bottom-2 right-2 left-1/2 transform -translate-x-1/2">
                            <button 
                                className="p-2 cursor-pointer rounded-lg bg-black text-white shadow-lg" 
                                onClick={()=>handleAddItem(item)}
                            >
                                    Add +
                            </button>
                        </div>
                        <img src={LOGO_URL + item.card.info.imageId} className="w-full h-auto" alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

