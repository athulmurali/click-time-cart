import React from "react";
import {REVIEW_SCREEN} from "../../RouteConstants";
import Link from "react-router-dom/es/Link";

export const ConfirmOrder = ()=>{
    return<div className="container-fluid  justify-content-center align-items-center  text-center">
        <div className="col">
            <div className="justify-content-center text-center">

                <b>Your order has been placed successfully!</b>
            </div>


        </div>
    </div>
}


export default  ConfirmOrder
