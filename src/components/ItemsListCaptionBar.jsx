import React from 'react';
import connect from "react-redux/es/connect/connect";
import {DELETE_ITEM_BY_INDEX, INC_DEC_QTY, REPLACE_QTY} from "../redux/constants/ItemsList";
const ItemsListCaptionBar = ()=>{
    return< li className="list-group-item">
        <div className = "row">
            <div className="col-lg-3 pull-left">
                { "Title"}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                { "Type"}
            </div>

            <div className="col-lg-2">
                {"Price"}
            </div>
            <div className="col-lg-2  float-right">
                Quantity

            </div>
            <div className=" col-lg-1 float-left badge-pill">
                { "ItemPrice"}
            </div>
            <div className=" col-lg-1 float-left badge-pill">
                { "Discount"}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                { "Net Price" }
            </div>

            <div className="col-lg-1">
               Remove
            </div>

        </div>

    </li>
}




const mapStateToProps = () => {

    return null
};


const mapDispatchToProps = (dispatch) =>({


    updateItemQty: (itemIndexInArray,newQty)=>{
        dispatch({
            type : REPLACE_QTY,
            payload:{
                array_index : itemIndexInArray,
                newQty : newQty
            }
        })
    },


    incOrDecQty: (itemIndexInArray,qtyToChange)=>{
        dispatch({
            type : INC_DEC_QTY,
            payload:{
                array_index : itemIndexInArray,
                incOrDec : qtyToChange
            }
        })
    },


    deleteItem: (itemIndexInArray)=>{
        dispatch({
            type : DELETE_ITEM_BY_INDEX,
            payload:{
                itemIndex : itemIndexInArray,
            }
        })
    }


})




export default connect( mapStateToProps, mapDispatchToProps)(ItemsListCaptionBar);

