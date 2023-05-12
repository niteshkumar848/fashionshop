import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'

import ProductContextProvider from './Store/ProductContext'
import CartContextProvider from './Store/CartContext'
import WishlistContextProvider from './Store/WishlistContext'
import CheckoutContextProvider from './Store/CheckoutContext'


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
   <>
      <ProductContextProvider>
         <CartContextProvider>
            <WishlistContextProvider>
               <CheckoutContextProvider>
                  <App />
               </CheckoutContextProvider>
            </WishlistContextProvider>
         </CartContextProvider>
      </ProductContextProvider>
   </>
) 