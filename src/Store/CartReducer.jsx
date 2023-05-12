export const CartReducer = (state, action) => {
    var {shoppingCart,qty,total} = state
    var product,updatedQty,updatedTotal
    switch (action.type) {
        case "ADD_TO_CART":
            product = action.product
            if(shoppingCart.find((item)=>item.id===product.id)!=undefined){
                return state
            }
            else{
                product['qty']=1
                updatedQty = qty+1
                updatedTotal = total+product.finalprice
                console.log(product);
                return{
                    shoppingCart:[product,...shoppingCart],
                    qty:updatedQty,
                    total:updatedTotal
                }
            }
        case "INC_CART":
            product = action.product
            product['qty']=product['qty']+1
            updatedQty=qty+1
            updatedTotal = total+product.finalprice
            return{
                shoppingCart:[...shoppingCart],
                qty:updatedQty,
                total:updatedTotal
            }
        case "DEC_CART":
            product = action.product
            if(product['qty']==1)
            return
            product['qty']=product['qty']-1
            updatedQty=qty-1
            updatedTotal = total-product.finalprice
            return{
                shoppingCart:[...shoppingCart],
                qty:updatedQty,
                total:updatedTotal
            }
        case "REMOVE_FROM_CART":
            product = action.product
            shoppingCart = shoppingCart.filter((item)=>item.id!==product.id)
            updatedQty = qty-product['qty']
            updatedTotal = total-product['qty']*product.finalprice
            delete product['qty']
            return{
                shoppingCart:[...shoppingCart],
                qty:updatedQty,
                total:updatedTotal
            }
        default:
            return state
    }
}