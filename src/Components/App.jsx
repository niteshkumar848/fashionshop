import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminHome from './Admin/AdminHome'
import AdminUsers from './Admin/AdminUsers'
import AdminMaincategory from './Admin/AdminMaincategory'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'



import AdminSubcategory from './Admin/AdminSubcategory'
import AdminAddSubcategory from './Admin/AdminAddSubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'


import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'


import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'


import Cart from './Cart'
import Checkout from './Checkout'
import ContactPage from './ContactPage'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Shop from './Shop'
import Signup from './Signup'
import SingleProductPage from './SingleProductPage'
import UpdateProfile from './UpdateProfile'


import AdminNewslatter from './Admin/AdminNewslatter'
import AdminContactPage from './Admin/AdminContactPage'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminCheckoutPage from './Admin/AdminCheckoutPage'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop/:mc/:sc/:br" element={<Shop />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/single-product-page/:_id" element={<SingleProductPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/update-profile" element={<UpdateProfile />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contactPage" element={<ContactPage />} />


                    <Route path='/admin-home' element={<AdminHome />} />
                    <Route path='/admin-users' element={<AdminUsers />} />
                    <Route path='/admin-maincategory' element={<AdminMaincategory />} />
                    <Route path='/admin-add-maincategory' element={<AdminAddMaincategory />} />



                    <Route path='/admin-update-maincategory/:_id' element={<AdminUpdateMaincategory />} />

                    <Route path='/admin-subcategory' element={<AdminSubcategory/>}/>

                    <Route path='/admin-add-subcategory' element={<AdminAddSubcategory/>}/>

                    <Route path='/admin-update-subcategory/:_id' element={<AdminUpdateSubcategory/>}/>

                    <Route path='/admin-brand' element={<AdminBrand/>}/>

                    <Route path='/admin-add-brand' element={<AdminAddBrand/>}/>

                    <Route path='/admin-update-brand/:_id' element={<AdminUpdateBrand/>}/>

                    <Route path='/admin-product' element={<AdminProduct/>}/>

                    <Route path='/admin-add-product' element={<AdminAddProduct/>}/>

                    <Route path='/admin-update-product/:_id' element={<AdminUpdateProduct/>}/>

                    <Route path='/admin-newslatter' element={<AdminNewslatter/>}/>
                    <Route path='/admin-contact' element={<AdminContactPage/>}/>
                    <Route path='/admin-single-contact/:_id' element={<AdminSingleContact/>}/>
                    <Route path='/admin-checkout' element={<AdminCheckoutPage/>}/>
                    <Route path='/admin-single-checkout/:_id' element={<AdminSingleCheckout/>}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
