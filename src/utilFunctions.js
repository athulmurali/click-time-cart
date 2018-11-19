import {FIXED_COUNT} from "./config/ConfigConstants";
import {getBulkDiscount} from "./Inventory";

export const getTotalItems = (itemsArray) => {
    const qtyArray = itemsArray.map(item => item.quantity)
    return qtyArray.reduce(((acc, curr) => acc + curr), 0)

}

export const getDiscountedItemPrice = (item) => {
    return Number.parseFloat((item.quantity * (item.price * (1 - item.discount))).toFixed(FIXED_COUNT))

}

export const getDiscountItemAllQuantity = (item) => {
    return Number.parseFloat((item.quantity * (item.price * item.discount)).toFixed(FIXED_COUNT))


}

export const getDiscountedItemListCost = (itemsArray) => {
    const temp = itemsArray.reduce(((acc, currentItem) => acc + getDiscountedItemPrice(currentItem)), 0)
    return Number.parseFloat(temp).toFixed(FIXED_COUNT)

}

export const getItemListCost = (itemsArray) => {
    const temp = itemsArray.reduce(((acc, currentItem) => acc + (currentItem.price * currentItem.quantity)), 0)
    return Number.parseFloat(temp).toFixed(FIXED_COUNT)

}


export const getDiscountForItemList = (itemsArray) => {
    const temp = itemsArray.reduce(((acc, currentItem) => acc + getDiscountItemAllQuantity(currentItem)), 0)
    return Number.parseFloat(temp).toFixed(FIXED_COUNT)
}

export const getFinalPrice = (itemsArray) => {
    const itemListTotalCost = getItemListCost(itemsArray)

    const itemListTotalDiscount = getDiscountForItemList(itemsArray)

    //totalDiscounts - includes itemListDiscount and Bulk discount

    const bulkDiscounts = getBulkDiscount(itemsArray)

    const totalDiscounts = parseFloat(itemListTotalDiscount) + parseFloat(bulkDiscounts)


    return itemListTotalCost - totalDiscounts
}

// adapted from
// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-a-array-of-objects
export const groupBy = (arr, key) => {
    return arr.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};



