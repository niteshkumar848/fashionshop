export const CheckoutReducer = (state, action) => {
     
    var { checkout } = state

    action = action.item
    switch (action.type) {
        case "ADD_TO_CHECKOUT":
            const check = { 
                _id: 1,
                userid: action.userid,
                mode: action.mode,
                status: action.status,
                paymentstatus: action.paymentstatus,
                total: action.total,
                shipping: action.shipping,
                final: action.final,  
                products: action.products
            }
            
            return {
                checkout: [check, ...checkout]
            }
        default:
            return state
    }
}