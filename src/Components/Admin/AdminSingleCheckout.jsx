import React, { useState, useContext } from 'react'
import LeftNav from './LeftNav'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { CheckoutContext } from '../../Store/CheckoutContext'
export default function AdminSingleCheckout() {
    var [status, setstatus] = useState("Active")
    var [paymentstatus, setpaymentstatus] = useState("Active")
    var { _id } = useParams()
    var { checkout } = useContext(CheckoutContext)
    var navigate = useNavigate()
    checkout = checkout.find((item) => item._id === parseInt(_id))
    function deleteRecord(_id) {
        alert("Deleted" + _id)
    }
    function getData(e) {
        if (e.target.name == "status")
            setstatus(e.target.value)
        else
            setpaymentstatus(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        alert(
            `
                Status: ${status}
                Payment Status : ${paymentstatus}
            `
        )
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Single Checkout Page</h5>
                    {
                        checkout ?
                            <>
                                <table className='table'>
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <td>{checkout._id}</td>
                                        </tr>
                                        <tr>
                                            <th>User Id</th>
                                            <td>{checkout.userid}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Mode</th>
                                            <td>{checkout.mode}</td>
                                        </tr>
                                        <tr>
                                            <th>Order Status</th>
                                            <td>{checkout.status}
                                                <select name='status' onChange={getData} className="form-select">
                                                    <option value="Not Packed">Not Packed</option>
                                                    <option value="packed">packed</option>
                                                    <option value="Ready to Ship">Ready to Ship</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Out for Delivery">Out for Delivery</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Payment Status</th>
                                            <td>{checkout.paymentstatus}
                                                <select name='paymentstatus' onChange={getData} className="form-select">
                                                    <option value="Pending">Pending</option>
                                                    <option value="Done">Done</option>
                                                </select></td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td>&#8377;{checkout.total}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>&#8377;{checkout.shipping}</td>
                                        </tr>
                                        <tr>
                                            <th>Final Amount</th>
                                            <td>&#8377;{checkout.final}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button onClick={postData} className="btn background text-light text-center w-100 mb-2">Update</button>
                                <h5 className='background text-light text-center p-1'>Checkout Products</h5>
                                <div className='table-responsive'>
                                    <table className="table table-light table-responsive table-hover">
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Color</th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                            {
                                                checkout.products.map((p, index) => {
                                                    return <tr key={index}>
                                                        <td><img src={p.pic1} width="50px" height="50px" className='rounded' /></td>
                                                        <td>{p.name}</td>
                                                        <td>{p.color}</td>
                                                        <td>{p.size}</td>
                                                        <td>&#8377;{p.finalprice}</td>
                                                        <td>{p.qty}</td>
                                                        <td>&#8377;{p.qty * p.finalprice}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </> :
                            <Link to="/admin-home" className='btn background text-light text-center w-100 my-5 p-2'>No Items to Display!!! Back to Home</Link>
                    }
                </div>
            </div>
        </div>
    )
}
