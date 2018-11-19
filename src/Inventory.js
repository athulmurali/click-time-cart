import {getDiscountedItemListCost, getTotalItems} from "./utilFunctions";
import {BULK_DISCOUNT, BULK_DISCOUNT_MIN_COUNT} from "./ConfigConstants";

export const TYPE_BLU_RAY = "BLU-RAY"
export const TYPE_DVD = "DVD"






export const ItemListArray = [
    {
        id: 0,
        title: "Star Wars Episode IV",
        price: 20,
        currency: "USD",
        type: TYPE_DVD,
        quantity: 0,
        details: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, " +
        "a Wookiee and two droids to save the galaxy.",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SL1500_.jpg',
        discount: 0.00

    },
    {
        id: 1,
        title: "Star Wars Episode IV",
        price: 25,
        currency: "USD",
        type: TYPE_BLU_RAY,
        quantity: 0,
        details: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, " +
        "a Wookiee and two droids to save the galaxy.",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SL1500_.jpg',
        discount: 0,


    },
    {
        id: 2,
        title: "Star Wars Episode V",
        price: 20,
        currency: "USD",
        type: TYPE_DVD,
        quantity: 0,
        details: "After the rebels are brutally overpowered " +
        "by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81pL7ZGEa5L._SX355_.jpg',
        discount: 0,

    },
    {
        id: 3,
        title: "Star Wars Episode V",
        price: 25,
        currency: "USD",
        type: TYPE_BLU_RAY,
        quantity: 0,
        details: "After the rebels are brutally overpowered " +
        "by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81pL7ZGEa5L._SX355_.jpg',
        discount: 0


    },
    {
        id: 4,
        title: "Star Wars Episode VI",
        price: 20,
        currency: "USD",
        type: TYPE_DVD,
        quantity: 0,
        details: "After a daring mission to rescue Han Solo from Jabba the Hutt," +
        " the rebels dispatch to Endor to destroy a more powerful Death Star.",
        coverImgUrl: 'https://d27t0qkxhe4r68.cloudfront.net/t_900/A10301A0000911867A.jpg?1435761144',
        discount: 0
    },
    {
        id: 5,
        title: "Star Wars Episode VI",
        price: 25,
        currency: "USD",
        type: TYPE_BLU_RAY,
        quantity: 0,
        details: "After a daring mission to rescue Han Solo from Jabba the Hutt, " +
        "the rebels dispatch to Endor to destroy a more powerful Death Star.",
        coverImgUrl: 'https://d27t0qkxhe4r68.cloudfront.net/t_900/A10301A0000911867A.jpg?1435761144',
        discount: 0

    },

]

export const getDiscListByType = (type) => {
    return ItemListArray.filter(item => item.type === type)

}


export const getAllBLU_RAY = () => {
    return getDiscListByType(TYPE_BLU_RAY)
}
export const getAllDVD = () => {
    return getDiscListByType(TYPE_DVD)
}

export const DISC_COUNT_DICT_BY_TYPE = {
    TYPE_DVD: getDiscListByType(TYPE_DVD).length,
    TYPE_BLU_RAY: getDiscListByType(TYPE_DVD).length
}


export const getBulkDiscount = (itemList) => {

    const totalCost = getDiscountedItemListCost(itemList)
    const itemCount = getTotalItems(itemList)

    if (itemCount >= BULK_DISCOUNT_MIN_COUNT) {
        return totalCost * (BULK_DISCOUNT)
    }
    return 0

}

export const totalAfterBulkDiscount = (itemList) => {
    const totalWithoutBulkDiscount = getDiscountedItemListCost(itemList)
    const bulkDiscountAmount = getBulkDiscount(itemList)
    return totalWithoutBulkDiscount - bulkDiscountAmount
}
export const maxUniqueBLURayCount = getAllBLU_RAY().length
export const maxUniqueDVDCount = getAllDVD().length

export default ItemListArray
