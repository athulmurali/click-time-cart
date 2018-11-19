
export const TYPE_BLU_RAY = "BLU-RAY"
export const TYPE_DVD = "DVD"

export const FIXED_COUNT = 0
export const ALL_DVD_DISCOUNT = 0.10
export const ALL_BLU_RAY_DISCOUNT = 0.15
export const BULK_DISCOUNT_MIN_COUNT = 100
export const BULK_DISCOUNT = .05

export const offersArray = [
    "Purchase all the different DVDs, " +
    "and get 10% discount on those items",

    "Purchase all the different BLU-RAY, " +
    "and get 15% discount on those items",

    "Get a 5% bulk discount  on the total in addition to previous discounts " +
    "for purchase of  100 items or more "
]




export const StockedItemList = [
    {
        id: 0,
        title: "Star Wars Episode IV",
        price: 20,
        currency: "USD",
        type: TYPE_DVD,
        quantity: 0,
        details: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, " +
        "a Wookiee and two droids to save the galaxy.",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SL1500_.jpg',
        discount: 0.00

    },
    {
        id: 1,
        title: "Star Wars Episode IV",
        price: 25,
        currency: "USD",
        type: TYPE_BLU_RAY,
        quantity: 0,
        details: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, " +
        "a Wookiee and two droids to save the galaxy.",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SL1500_.jpg',
        discount: 0,


    },
    {
        id: 2,
        title: "Star Wars Episode V",
        price: 20,
        currency: "USD",
        type: TYPE_DVD,
        quantity: 0,
        details: "After the rebels are brutally overpowered " +
        "by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81pL7ZGEa5L._SX355_.jpg',
        discount: 0,

    },
    {
        id: 3,
        title: "Star Wars Episode V",
        price: 25,
        currency: "USD",
        type: TYPE_BLU_RAY,
        quantity: 0,
        details: "After the rebels are brutally overpowered " +
        "by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda",
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81pL7ZGEa5L._SX355_.jpg',
        discount: 0


    },
    {
        id: 4,
        title: "Star Wars Episode VI",
        price: 20,
        currency: "USD",
        type: TYPE_DVD,
        quantity: 0,
        details: "After a daring mission to rescue Han Solo from Jabba the Hutt," +
        " the rebels dispatch to Endor to destroy a more powerful Death Star.",
        coverImgUrl: 'https://d27t0qkxhe4r68.cloudfront.net/t_900/A10301A0000911867A.jpg?1435761144',
        discount: 0
    },
    {
        id: 5,
        title: "Star Wars Episode VI",
        price: 25,
        currency: "USD",
        type: TYPE_BLU_RAY,
        quantity: 0,
        details: "After a daring mission to rescue Han Solo from Jabba the Hutt, " +
        "the rebels dispatch to Endor to destroy a more powerful Death Star.",
        coverImgUrl: 'https://d27t0qkxhe4r68.cloudfront.net/t_900/A10301A0000911867A.jpg?1435761144',
        discount: 0

    },

]
