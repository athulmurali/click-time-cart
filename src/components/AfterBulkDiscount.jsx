import React from "react";

const AfterBulkDiscount=(props)=>{
    return <div>
        < li className="list-group-item border-secondary border-dark">
            <div className = "row">
                <div className="col-lg-3 pull-left">
                    { "Final Amount"}
                </div>

                <div className=" col-lg-1 float-left badge-pill">
                    { "---"}
                </div>

                <div className="col-lg-2">
                    {"---"}
                </div>
                <div className="col-lg-2  float-right">
                    {"---"}

                </div>
                <div className=" col-lg-1 float-left badge-pill">
                    { "---"}
                </div>
                <div className=" col-lg-1 float-left badge-pill">
                    { "-$" + props.totalDiscounts}
                </div>

                <div className=" col-lg-1 float-left badge-pill">
                    <b> { "$" + props.amountAfterBulkDiscount }</b>
                </div>

                <div className="col-lg-1">
                    { "---"}

                </div>

            </div>

        </li>



    </div>

}


export default  AfterBulkDiscount
