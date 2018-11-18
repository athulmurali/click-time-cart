//loading from the assumed data set
import {ItemListArray} from "../../Inventory";


const initialState = {
    ItemListArray: ItemListArray

};


const InventoryReducer = (state = initialState, action) => {

   //this part should be replaced with the api service and dependent cases,
   //  hence no action.type based returns

    return {...state}
}

export default InventoryReducer
