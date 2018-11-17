import {DELETE_ITEM_BY_INDEX, INC_DEC_QTY, REPLACE_QTY} from "../constants/ItemsList";


const initialState = {
    ItemListArray: [
        {
            id: 0,
            title: "Star Wars Episode IV",
            price: 20,
            currency: "USD",
            type: 'DVD',
            quantity: 0,

        }, {
            id: 1,
            title: "Star Wars Episode IV",
            price: 25,
            currency: "USD",
            type: 'BLU-RAY',
            quantity: 0

        }, {
            id: 2,
            title: "Star Wars Episode V",
            price: 20,
            currency: "USD",
            type: 'DVD',
            quantity: 0


        }, {
            id: 3,
            title: "Star Wars Episode V",
            price: 25,
            currency: "USD",
            type: 'BLU-RAY',
            quantity: 0


        }, {
            id: 4,
            title: "Star Wars Episode VI",
            price: 20,
            currency: "USD",
            type: 'DVD',
            quantity: 0
        }, {
            id: 5,
            title: "Star Wars Episode VI",
            price: 25,
            currency: "USD",
            type: 'BLU-RAY',
            quantity: 0
        },

    ],

    fetching: false,
    error: false
};


const incDecQty = (ItemArray, array_index, changeInQty) => {
    ItemArray[array_index].quantity += changeInQty
    return [...ItemArray]
}
const updateItemQty = (ItemArray, array_index, newQty) => {
    ItemArray[array_index].quantity = parseInt(newQty)
    return [...ItemArray]
}

const deleteItem = (ItemArray, indexToDelete) => {

    return ItemArray.filter((item, index) => index !== indexToDelete)
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


        case DELETE_ITEM_BY_INDEX :
        {
            const newItemListArray = [... deleteItem(state.ItemListArray, action.payload.itemIndex)]
            return {...state, ItemListArray: newItemListArray}
        }



        default :
            return {...initialState}


    }
}

export default ItemsListReducer
