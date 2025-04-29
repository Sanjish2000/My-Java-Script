const ShoppingCart=[

    {
        Product:"JS COURSE",
        Price:2000
    },
    {
        Product:"JS COURSE",
        Price:2000
    },
    {
        Product:"JS COURSE",
        Price:2000
    },
    {
        Product:"JS COURSE",
        Price:2000
    },
    {
        Product:"JS COURSE",
        Price:2000
    },
]
const TotalPrice=ShoppingCart.reduce((accu,itme)=>accu+itme.Price,0)
console.log(TotalPrice);
