//loading from the assumed data set

import {StockedItemList} from "../../config/ConfigConstants";

console.log(StockedItemList)

const initialState = {
    ItemListArray: StockedItemList

};


const InventoryReducer = (state = initialState, action) => {

   //this part should be replaced with the api service and dependent cases,
   //  hence no action.type based returns

    return {...state}
}

export default InventoryReducer
