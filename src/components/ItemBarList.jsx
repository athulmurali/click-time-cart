import React from 'react'
import ItemBar from "./ItemBar";
import connect from "react-redux/es/connect/connect";
import TotalBar from "./TotalBar";
import ItemsListCaptionBar from "./ItemsListCaptionBar";
import {getDiscountForItemList, getDiscountedItemListCost, getTotalItems, getItemListCost} from "../utilFunctions";
import BulkDiscountBar from "./BulkDiscountBar";
import {getBulkDiscount} from "../Inventory";
import AfterBulkDiscount from "./AfterBulkDiscount";


const ItemBarList  =(props)=>{

    const itemListTotalDiscount = getDiscountForItemList(props.ItemListArray)
    const itemListTotalCost = getItemListCost(props.ItemListArray)

    //totalDiscounts - includes itemListDiscount and Bulk discount

    const bulkDiscounts =  getBulkDiscount(props.ItemListArray)

    const totalDiscounts= parseFloat(itemListTotalDiscount) +  parseFloat(bulkDiscounts)

    const totalPriceAfterItemListDiscount =  parseFloat(getDiscountedItemListCost(props.ItemListArray))

    const amountAfterBulkDiscount = totalPriceAfterItemListDiscount - totalDiscounts

     return<ul className="list-group">

         <ItemsListCaptionBar/>
         { props.ItemListArray.map((Item,index)=><ItemBar   index = {index}
                                                      quantity ={Item.quantity}
                                                type ={Item.type}
                                               price ={Item.price}
                                               title = {Item.title}
                                                discount = {Item.discount}
                                               currency = {Item.currency}/>)}

         <TotalBar
             itemListTotalCost = {itemListTotalCost}
             totalPrice={totalPriceAfterItemListDiscount}
                   itemsCount = {getTotalItems(props.ItemListArray)}
                   itemListDiscount = {itemListTotalDiscount}
         ></TotalBar>

         <br/><br/><br/>
         <BulkDiscountBar bulkDiscountAmount={getBulkDiscount(props.ItemListArray)}/>
         <AfterBulkDiscount
             totalPriceAfterItemListDiscount ={totalPriceAfterItemListDiscount}
             totalDiscounts         =   {totalDiscounts}
             amountAfterBulkDiscount =  {amountAfterBulkDiscount}>
         </AfterBulkDiscount>



     </ul>
}




const mapStateToProps = state =>state.ItemsListReducer;


const mapDispatchToProps = (dispatch) =>({})



export default connect(mapStateToProps, mapDispatchToProps)(ItemBarList)

