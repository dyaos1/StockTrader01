orders = [{
    method: "sell",
    name: "samsung",
    quantity: 10,
    price: 1000,
    status: "pending"
},
{
    method: "buy",
    name: "samsung",
    quantity: 5,
    price: 900,
    status: "pending"
},{
    method: "sell",
    name: "samsung",
    quantity: 12,
    price: 1200,
    status: "pending"
},{
    method: "sell",
    name: "samsung",
    quantity: 15,
    price: 1500,
    status: "pending"
},{
    method: "sell",
    name: "samsung",
    quantity: 8,
    price: 800,
    status: "pending"
},]




function matchFinder(_method, order) {
    
    let array2 = orders.filter(e => e.method == _method).sort((a, b) => {
        return a.price-b.price
    }).reduce((acc, cur) => {
        if(cur.price < order.price) {
            if(order.quantity < cur.quantity) {
                cur.quantity = cur.quantity - order.quantity
            } else if (cur.quantity < order.quantity) {
                cur.quantity = 0
                order.quantity = order.quantity - cur.quantity
            } else {
                cur.quantity = 0
                order.quantity = 0
            }
        }
        acc.push(cur)

        return acc
    }, [])

    return array2;
}


let order = {
    method: "buying",
    name: "samsung",
    quantity: 12,
    price: 1100,
    status: "pending"
}


console.log(matchFinder("sell", order))

function findHightst() {

}