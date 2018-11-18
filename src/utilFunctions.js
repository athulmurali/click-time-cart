import {FIXED_COUNT} from "./ConfigConstants";

export  const getTotalItems=(itemsArray)=>{
        const qtyArray = itemsArray.map(item=>item.quantity)
        return qtyArray.reduce(((acc, curr) => acc+ curr),0)

    }

   export const getDiscountedItemPrice =(item)=>{
        return  Number.parseFloat((item.quantity *  (item.price  * (1 - item.discount))).toFixed(FIXED_COUNT))

    }

    export const getDiscountItemAllQuantity=(item)=>{
        return  Number.parseFloat((item.quantity *  (item.price  * item.discount)).toFixed(FIXED_COUNT))


    }

    export const getTotalCost=(itemsArray)=>{
        const temp= itemsArray.reduce(((acc, currentItem) => acc+ getDiscountedItemPrice(currentItem)),0)
        return Number.parseFloat(temp).toFixed(FIXED_COUNT)

    }


    export const getDiscountForItemList=(itemsArray)=>{
        const temp =  itemsArray.reduce(((acc, currentItem) => acc+ getDiscountItemAllQuantity(currentItem)),0)
        return Number.parseFloat(temp).toFixed(FIXED_COUNT)


    }


    // adapted from
    // https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-a-array-of-objects
    export const  groupBy = (arr, key) =>{
        return arr.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };



