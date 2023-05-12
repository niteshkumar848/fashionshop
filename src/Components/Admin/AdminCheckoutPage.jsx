import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

import { CheckoutContext } from '../../Store/CheckoutContext';
export default function AdminCheckoutPage() {
    var { checkout } = useContext(CheckoutContext)
    function deleteRecord(_id) {
        alert("Deleted" + _id)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Checkout List Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>User Id</th>
                                <th>Payment Mode</th>
                                <th>Order Status</th>
                                <th>Payment Status</th>
                                <th></th>
                            </tr>
                            {
                                checkout.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.userid}</td>
                                        <td>{item.mode}</td>
                                        <td>{item.status}</td>
                                        <td>{item.paymentstatus}</td>
                                        <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-single-checkout/${item._id}`}><RemoveRedEyeIcon /></Link></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
