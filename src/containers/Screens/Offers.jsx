import React from "react";
import {offersArray} from "../../config/ConfigConstants";


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
