import React from 'react';
import connect from "react-redux/es/connect/connect";
import {DELETE_ITEM_BY_INDEX, INC_DEC_QTY, REPLACE_QTY} from "../redux/constants/ItemsList";

const ItemBar = (props) => {
    console.log(props)
    return < li className="list-group-item">
        <div className="row">
            <div className="col-lg-3 pull-left">
                {props.title}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                {props.type}
            </div>

            <div className="col-lg-2">
                {"$" + props.price}
            </div>
            <div className="col-lg-2  float-right">
                <button className="font-weight-bold btn btn-outline-danger rounded "
                        disabled={props.quantity <= 0}
                        onClick={() => {
                            props.incOrDecQty(props.index, -1)
                        }}>-
                </button>
                <input className="input-group-sm"

                       value={props.quantity}
                       style={{width: 50, justifyContent: 'center'}}
                       onChange={(e) => {
                           const val = parseInt(e.target.value)
                           if (isNaN(val)) {
                               props.updateItemQty(props.index, 0)
                           }


                           else {
                               props.updateItemQty(props.index, val)
                           }

                       }}
                />


                <button className="btn btn-outline-success rounded"
                        onClick={() => {
                            props.incOrDecQty(props.index, 1)
                        }}>+
                </button>
            </div>
            <div className=" col-lg-1 float-left badge-pill">
                {"$" + props.price * props.quantity}
            </div>
            <div className=" col-lg-1 float-left badge-pill">
                {"-$" + (props.discount * props.price * props.quantity).toFixed(2)}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                {"$" + (props.quantity * props.price * (1 - props.discount)).toFixed(2)}
            </div>


            <div className="col-lg-1">
                <button className="font-weight-bold btn btn-danger rounded "
                        onClick={() => {
                            props.deleteItem(props.index)
                        }}>X
                </button>
            </div>

        </div>

    </li>
}


const mapStateToProps = () => {

    return null
};


const mapDispatchToProps = (dispatch) => ({


    updateItemQty: (itemIndexInArray, newQty) => {
        dispatch({
            type: REPLACE_QTY,
            payload: {
                array_index: itemIndexInArray,
                newQty: newQty
            }
        })
    },


    incOrDecQty: (itemIndexInArray, qtyToChange) => {
        dispatch({
            type: INC_DEC_QTY,
            payload: {
                array_index: itemIndexInArray,
                incOrDec: qtyToChange
            }
        })
    },


    deleteItem: (itemIndexInArray) => {
        dispatch({
            type: DELETE_ITEM_BY_INDEX,
            payload: {
                itemIndex: itemIndexInArray,
            }
        })
    }


})


export default connect(mapStateToProps, mapDispatchToProps)(ItemBar);

