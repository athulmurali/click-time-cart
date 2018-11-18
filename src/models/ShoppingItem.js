import { Model } from 'react-axiom';

class ShoppingItem extends Model {};


const shoppingItem =  ShoppingItem({
    id: -1,
    title: '',
    quantity: 0,
    discount : 0,
    price : 0,
    coverImgUrl: ''

});


shoppingItem.getTotalDiscountedCost =()=>{
}



