import React from 'react'
import ItemCardDeck from "../../components/ItemCardDeck";
import {REVIEW_SCREEN} from "../../RouteConstants";
import Link from "react-router-dom/es/Link";
import connect from "react-redux/es/connect/connect";
import {INC_DEC_QTY} from "../../redux/constants/ItemsList";
import {getTotalCost, getTotalItems} from "../../utilFunctions";

const OrderCatalogueScreen =(props)=>{
    return <div className="container-fluid">

        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Move DVD Catalogue</a>
                <form className="form-inline">
                    <i className="px-2 fa fa-dollar"/>
                    <text> {getTotalCost(props.ItemListArray)}</text>
                    <i className=" px-1 fa fa-cart-plus fa-2x"></i>
                    <text className="mx-1 badge-pill  badge rounded">{getTotalItems(props.ItemListArray)}</text>



                    <Link to={REVIEW_SCREEN}>
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit">Review order</button>
                        </Link>

                </form>
            </nav>

        </div>

        <ItemCardDeck/>
    </div>

}


const mapStateToProps = state => state.ItemsListReducer
const mapDispatchToProps = (dispatch) =>({})
export default connect(mapStateToProps, mapDispatchToProps)(OrderCatalogueScreen)

