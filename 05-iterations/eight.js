// reduce

const myNums=[1,2,3]

// const Mytotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and current value:${currval}`);
//     return acc+currval
// },0)

const Mytotal=myNums.reduce((acc,currval) => acc+currval,0)

console.log(Mytotal);

const shoppingCart =[
    {
        itemname:'Js',
        price:'2999'
    },
    {
        itemname:'py',
        price:'1999'
    },
    {
        itemname:'Datascience',
        price:'2299'
    },
    {
        itemname:'App Dev',
        price:'222222'
    }
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);