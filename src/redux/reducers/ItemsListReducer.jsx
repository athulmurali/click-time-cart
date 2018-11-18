import {ADD_ITEM_TO_CART, DELETE_ITEM_BY_INDEX, INC_DEC_QTY, REPLACE_QTY, RESET_CART} from "../constants/ItemsList";
import {
    ALL_BLU_RAY_DISCOUNT, ALL_DVD_DISCOUNT, maxUniqueBLURayCount, maxUniqueDVDCount, TYPE_BLU_RAY,
    TYPE_DVD
} from "../../Inventory";


const initialState = {
    ItemListArray: [],
    fetching: false,
    error: false
};


const updateDiscountOnQtyChange = (itemList) => {

    const currentDVDList = itemList.filter(item => item.type === TYPE_DVD  && item.quantity > 0 )
    const currentBLURAYList = itemList.filter(item => item.type === TYPE_BLU_RAY && item.quantity > 0)


    console.log("currentDVDList : ", currentDVDList)
    console.log("currentBluList : ", currentBLURAYList)


    const currentDVDIdSet = new Set(currentDVDList.map(item => item.id   ))
    const currentBluRayIdSet = new Set(currentBLURAYList.map(item => item.id ))

    console.log("currentDVDIdSet : ")
    console.log(currentDVDIdSet)

    console.log("currentBLuIdSet : ")
    console.log(currentBluRayIdSet)


    const countCurrentDVDIdSet      = currentDVDIdSet.size
    const countCurrentBluRayIdSet   = currentBluRayIdSet.size


    console.log("countCurrentDVDIdSet : ")
    console.log(countCurrentDVDIdSet)

    console.log("countCurrentBluRayIdSet : ")
    console.log(countCurrentBluRayIdSet)

    itemList = itemList.map(item => {
        if (item.type === TYPE_BLU_RAY) {

            if (countCurrentBluRayIdSet === maxUniqueBLURayCount) {

                item.discount = ALL_BLU_RAY_DISCOUNT
            }
            else {
                //setDiscount to 0

                item.discount = 0
            }


        }
        if (item.type === TYPE_DVD) {
            if (countCurrentDVDIdSet === maxUniqueDVDCount) {
                console.log("updating discount for dvd")

                item.discount = ALL_DVD_DISCOUNT
            }
            else {
                //setDiscount to 0
                item.discount = 0
            }

        }
        return item
    })

    return itemList
}
const incDecQty = (itemList, array_index, changeInQty) => {
    itemList[array_index].quantity += changeInQty
    updateDiscountOnQtyChange(itemList)
    return [...itemList]
}
const updateItemQty = (itemList, array_index, newQty) => {
    itemList[array_index].quantity = parseInt(newQty)
    itemList = updateDiscountOnQtyChange(itemList)
    return [...itemList]
}

const deleteItem = (itemList, indexToDelete) => {

    let deletedList =  itemList.filter((item, index) => index !== indexToDelete)
    return updateDiscountOnQtyChange(deletedList)
}
const ItemsListReducer = (state = initialState, action) => {

    switch (action.type) {

        case INC_DEC_QTY :
            return {
                ...state,
                ItemListArray: incDecQty(state.ItemListArray, action.payload.array_index,
                    action.payload.incOrDec)
            }

        case REPLACE_QTY:
            return {
                ...state, error: false,
                ItemListArray: updateItemQty(state.ItemListArray,
                    action.payload.array_index, action.payload.newQty)
            }


        case DELETE_ITEM_BY_INDEX : {
            const newItemListArray = [... deleteItem(state.ItemListArray, action.payload.itemIndex)]
            return {...state, ItemListArray: newItemListArray}
        }


        case ADD_ITEM_TO_CART: {
            const ind = getIndexOfItem(state.ItemListArray, action.payload.item)
            if (ind > -1) {

                const updatedArray = incDecQty(state.ItemListArray, ind, 1)

                return {...state, ItemListArray: updatedArray}
            }

            else {

                let newItem = action.payload.item
                newItem.quantity = 1
                let currentList = state.ItemListArray
                currentList.push(action.payload.item)
                currentList = updateDiscountOnQtyChange(currentList)

                return {...state, ItemListArray: [...currentList]}
            }

        }


        case RESET_CART:
            return initialState

        default :
            return {...initialState}


    }
}

export default ItemsListReducer

export const getIndexOfItem = (arr, newItem) => {
    return arr.findIndex(currentItem => newItem.id === currentItem.id)

}
