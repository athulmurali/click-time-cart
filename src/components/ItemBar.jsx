import React from 'react';

const ItemBar = (props)=>{
    return< li className="list-group-item">
        <div className = "row">
            <div className="col-lg-6 pull-left">
                {props.title + "--"+ "--" +  props.price + props.currency  }
            </div>

            <div className=" col-lg-2 float-left badge-pill">
                { props.type}
            </div>
            <div className="col-lg-4  float-right">
               <button className="font-weight-bold btn btn-outline-danger">-</button>
                <input className="input-group-sm"></input>


                <button className="btn btn-outline-success"> + </button>
            </div>

        </div>

    </li>
}


export default  ItemBar
