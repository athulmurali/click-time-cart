import React from 'react';
import connect from "react-redux/es/connect/connect";
import {DELETE_ITEM_BY_INDEX, INC_DEC_QTY, REPLACE_QTY} from "../redux/constants/ItemsList";
const ItemBar = (props)=>{
    console.log(props)
    return< li className="list-group-item">
        <div className = "row">
            <div className="col-lg-4 pull-left">
                {props.title  }
            </div>

            <div className="col-lg-2 pull-left">
                {props.price + props.currency  }
            </div>
            <div className=" col-lg-2 float-left badge-pill">
                { props.type}
            </div>
            <div className="col-lg-3  float-right">
               <button className="font-weight-bold btn btn-outline-danger rounded "
                       disabled={props.quantity <=0}
                       onClick={()=>{props.increaseQty(props.index, -1)}}>-</button>
                <input className="input-group-sm"

                       value={props.quantity}
                       style ={{width:50, justifyContent:'center'}}
                       onChange={e=>props.updateItemQty(props.index,parseInt(e.target.value) )}
                />


                <button className="btn btn-outline-success rounded"
                        onClick={()=>{props.increaseQty(props.index, 1)}}>+</button>
            </div>

            <div className="col-lg-1  float-right">
                <button className="font-weight-bold btn btn-danger rounded "
                        onClick={()=>{props.deleteItem(props.index)}}>X</button>
            </div>

        </div>

    </li>
}




const mapStateToProps = state => {

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


    increaseQty: (itemIndexInArray,qtyToChange)=>{
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




export default connect( mapStateToProps, mapDispatchToProps)(ItemBar);

