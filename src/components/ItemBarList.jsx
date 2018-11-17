import React from 'react'
import ItemBar from "./ItemBar";

const ItemListArray = [
    {
        title: "Star Wars Episode IV",
        price : 20,
        currency : "USD",
        type : 'DVD'

    }, {
        title: "Star Wars Episode IV",
        price : 25,
        currency : "USD",
        type : 'BLU-RAY'

    },{
        title: "Star Wars Episode V",
        price : 20,
        currency : "USD",
        type : 'DVD'


},{
        title: "Star Wars Episode V",
        price : 25,
        currency : "USD",
        type : 'BLU-RAY'


},{
        title: "Star Wars Episode VI",
        price : 20,
        currency : "USD",
        type : 'DVD'
},{
        title: "Star Wars Episode VI",
        price : 25,
        currency : "USD",
        type : 'BLU-RAY'
},

]





 const ItemBarList  =()=>{

     return<ul className="list-group">
         { ItemListArray.map((Item)=><ItemBar  type ={Item.type} title = {Item.title} currency = {Item.currency}/>)}


     </ul>
}


export  default ItemBarList;
