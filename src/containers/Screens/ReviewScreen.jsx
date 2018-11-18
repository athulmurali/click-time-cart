import React from 'react'
import ItemBarList from "../../components/ItemBarList";
import Link from "react-router-dom/es/Link";
import {PLACE_ORDER} from "../../RouteConstants";
import {RESET_CART} from "../../redux/constants/ItemsList";
import connect from "react-redux/es/connect/connect";
import {getTotalItems} from "../../utilFunctions";

const ReviewScreen =(props)=>{

    const countItemsInCart = (getTotalItems(props.ItemListArray))

    if (props.ItemListArray.length === 0)
        return <EmptyCart/>
    return <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand justify-content-start">Review order</a>
                <form className="form-inline justify-content-center">

                    <Link to={PLACE_ORDER}>
                        <button
                            disabled={countItemsInCart < 1}
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            onClick={()=>{props.resetCart()
                            }}
                        >Confirm</button>
                    </Link>
                    <button
                        className="btn btn-outline-danger my-2 my-sm-0"
                        onClick={()=>{props.resetCart()}}
                    >Clear</button>

                </form>
            </nav>
             <ItemBarList></ItemBarList>
    </div>
}

const EmptyCart =()=>{
    return <div className="jumbotron text-center">
        <h3> No items added! Your shopping cart is empty</h3>
    </div>
}

const mapStateToProps = (state)=>{
    return state.ItemsListReducer

}
const mapDispatchToProps=(dispatch)=>({
    resetCart: ()=>{
        dispatch({
            type : RESET_CART,

        })
    },


})

export default  connect(mapStateToProps, mapDispatchToProps)(ReviewScreen)
