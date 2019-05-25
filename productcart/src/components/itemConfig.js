const productColor = [
    {   
        colorId: 1,
        color: "Blue",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg"
    },

    {
        colorId: 2,
        color: "Red",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg"
    },

    {
        colorId: 3,
        color: "Yellow",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img3.jpg"
    }
];

const productDetails = [
    {
        id: 101,
        name: "Allen Solly",
        // price: "$35.5",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg",
        units: 1,
        price: 2000
    },

    {
        id: 102,
        name: "Van Heusen",
        // price: "$34.5",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg",
        units: 1,
        price: 2700
    },

    {
        id: 103,
        name: "Levi's",
        // price: "$35",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img3.jpg",
        units: 1,
        price: 1700
    },

    {
        id: 104,
        name: "Park Avenue",

        // price: "$33.5",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg",
        units: 1,
        price: 2500,
    },

    {
        id: 105,
        name: "FabIndia",
        // price: "$36.5",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg",
        units: 1,
        price: 2000
    },
    
    {
        id: 106,
        name: "Biba",
        // price: "$30.5",
        img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg",
        units: 1,
        price: 2200
    }
];

const buttonLabels = [
   "Update Cart", 
   "Empty Cart",
   "Continue Shopping",
   "Go To Checkout"
]

const addedItems = [];

export { productColor, productDetails, buttonLabels, addedItems };