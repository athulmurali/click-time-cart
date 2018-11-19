import React from "react";
import ItemCard from "./ItemCard";
import connect from "react-redux/es/connect/connect";
import {getAllBLU_RAY, getAllDVD} from "../Inventory";

const ItemCardDeck =(props)=>{
    console.log(getAllBLU_RAY())
    console.log(getAllDVD())

    return <div class="card-deck">
        {
            props.ItemListArray.map((item, index )=>{
                return <ItemCard item = {item}/>
            })

        }

    </div>
}

    const mapStateToProps = state => {


        return state.InventoryReducer
    };


    const mapDispatchToProps = (dispatch) =>({



    })



    export default connect(mapStateToProps, mapDispatchToProps)(ItemCardDeck)

