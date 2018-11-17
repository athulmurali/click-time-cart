import React from 'react'
import ItemBar from "./ItemBar";
import connect from "react-redux/es/connect/connect";


const ItemBarList  =(props)=>{

     return<ul className="list-group">
         { props.ItemListArray.map((Item,index)=><ItemBar   index = {index}
                                                      quantity ={Item.quantity}
                                                type ={Item.type}
                                               price ={Item.price}
                                               title = {Item.title}

                                               currency = {Item.currency}/>)

         }


     </ul>
}




const mapStateToProps = state => {


    return state.ItemsListReducer
};


const mapDispatchToProps = (dispatch) =>({



})



export default connect(mapStateToProps, mapDispatchToProps)(ItemBarList)

