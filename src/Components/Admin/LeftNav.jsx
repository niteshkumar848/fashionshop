import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
    return (
        <>
            <div class="list-group">
                <h5 className='background text-light text-center p-2'>Menu</h5>
                <Link to="/admin-home" class="list-group-item list-group-item-action">Home</Link>
                <Link to="/admin-users" class="list-group-item list-group-item-action">Users</Link>
                <Link to="/admin-maincategory" class="list-group-item list-group-item-action">Maincategory</Link>
                <Link to="/admin-subcategory" class="list-group-item list-group-item-action">Subcategory</Link>
                <Link to="/admin-brand" class="list-group-item list-group-item-action">Brands</Link>
                <Link to="/admin-product" class="list-group-item list-group-item-action">Product</Link>
                <Link to="/admin-checkout" class="list-group-item list-group-item-action">Checkout</Link>
                <Link to="/admin-contact" class="list-group-item list-group-item-action">Contact</Link>
                <Link to="/admin-newslatter" class="list-group-item list-group-item-action">Newslatter</Link>
            </div>
        </>
    )
}
 