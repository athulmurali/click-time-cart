import React from "react";
import {ADD_ITEM_TO_CART} from "../redux/constants/ItemsList";
import connect from "react-redux/es/connect/connect";

const ItemCard = (props)=>{
return  <div class="card " style={{minWidth: 40}}>
        <img class="card-img-top"
             src={props.item.coverImgUrl}
             alt="Card image cap"
             style={{maxHeight : 150}}/>
            <div class="card-body">
                <div className="row px-1 float-right">
                    <text className="badge"> { "$" + props.item.price }</text>
                </div>
                <h5 class="card-title">{props.item.title}</h5>

                <p class="card-text"><label className="text-muted">{props.item.type}</label></p>


                <div className="container">
                    <button className="btn btn-block btn-warning"
                            onClick={()=>{props.addItemToCart(props.item)}}
                    > Buy</button>
                </div>


            </div>
    </div>
}


const mapStateToProps =()=>{{}}

const mapDispatchToProps=(dispatch)=>({

    addItemToCart: (item)=>{
        dispatch({
            type : ADD_ITEM_TO_CART,
            payload:{
                item : item

            }
        })
    },


})



export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
