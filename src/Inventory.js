import {getDiscountedItemListCost, getTotalItems} from "./utilFunctions";
import {BULK_DISCOUNT, BULK_DISCOUNT_MIN_COUNT, StockedItemList, TYPE_BLU_RAY, TYPE_DVD} from "./config/ConfigConstants";


export const getDiscListByType = (itemList,type) => {
    return StockedItemList.filter(item => item.type === type)

}


export const getAllBLU_RAY = () => {
    return getDiscListByType(TYPE_BLU_RAY)
}
export const getAllDVD = () => {
    return getDiscListByType(TYPE_DVD)
}



export const getBulkDiscount = (itemList) => {

    const totalCost = getDiscountedItemListCost(itemList)
    const itemCount = getTotalItems(itemList)

    if (itemCount >= BULK_DISCOUNT_MIN_COUNT) {
        return totalCost * (BULK_DISCOUNT)
    }
    return 0

}

export const maxUniqueBLURayCount = getAllBLU_RAY().length
export const maxUniqueDVDCount = getAllDVD().length
