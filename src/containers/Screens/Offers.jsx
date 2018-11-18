import React from "react";


const offersArray  = [
    "Purchase all the different DVDs, " +
    "and 10% discount on those items",

    "Purchase all the different BLU-RAY, " +
    "and 15% discount on those items",

    "Get a 5% bulk discount  on the total in addition to previous discounts " +
    "for purchase of  100 items or more "
]



const Offers =(props)=>{

   return  (<div className="container-fluid">

        { offersArray.map((discountDetail, index)=> {
            return <div className="row jumbotron justify-content-start">
                {discountDetail}
            </div>
        })}
    </div>)

}



export default  Offers
