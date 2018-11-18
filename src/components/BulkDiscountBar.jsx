import React from "react";

const BulkDiscountBar=(props)=>{
    return< li className="list-group-item border-secondary border-dark">
        <div className = "row">
            <div className="col-lg-3 pull-left">
                { "Bulk Discount "}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                { "---"}
            </div>

            <div className="col-lg-2">
                {"---"}
            </div>
            <div className="col-lg-2  float-right">
                {"-----"}

            </div>
            <div className=" col-lg-1 float-left badge-pill">
                { "---"}
            </div>
            <div className=" col-lg-1 float-left badge-pill">
                { "-$" + Number.parseFloat(props.bulkDiscountAmount).toFixed(2)}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                { "" }
            </div>

            <div className="col-lg-1">
                --
            </div>

        </div>

    </li>

}

export  default  BulkDiscountBar
