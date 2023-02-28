const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    }
}

const calculatePriceAndQuantity = (shoppingBag) => {
    let result = shoppingBag.reduce((acc,{id,count})=>{
        if (!groceries[id]) return acc
        const {price,discount} = groceries[id]
        const priceWithDiscount = price - price * discount / 100
        return acc + priceWithDiscount * count
   },0)
    return result.toFixed(2)
}

const getTotalPriceOfShoppingBag = (shoppingBag) => {
   return calculatePriceAndQuantity (shoppingBag)
}

const shoppingBag = [
    {id:"73Wakv",count:3},
    {id:"5L3db9",count:5}
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice",totalPrice)