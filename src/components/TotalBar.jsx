import React from "react";

const TotalBar =(props)=>{

    return <div>
    < li className="list-group-item border-secondary border-dark">
        <div className = "row">
            <div className="col-lg-3 pull-left">
                { "Total"}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                { "---"}
            </div>

            <div className="col-lg-2">
                {"---"}
            </div>
            <div className="col-lg-2  float-right">
                {props.itemsCount}

            </div>
            <div className=" col-lg-1 float-left badge-pill">
                { "$" + props.itemListTotalCost}
            </div>
            <div className=" col-lg-1 float-left badge-pill">
                { "-$" + props.itemListDiscount}
            </div>

            <div className=" col-lg-1 float-left badge-pill">
                { "$" + props.totalPrice }
            </div>

            <div className="col-lg-1">
                ---
            </div>

        </div>

    </li>



    </div>

}



export default  TotalBar
