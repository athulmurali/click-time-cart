import React from 'react';

const ItemBar = (props)=>{
    return< li className="list-group-item">
        <div className = "row">
            <div className="col-lg-6 pull-left">
                {props.title + "--"+ "--" +  props.price + props.currency + "--" + props.type}
            </div>

            <div className="col-lg-6 float-right">
               <button classname="btn btn-outline-primary">-</button>
                <button classname="btn btn-outline-secondary"> + </button>
            </div>

        </div>

    </li>
}


export default  ItemBar
