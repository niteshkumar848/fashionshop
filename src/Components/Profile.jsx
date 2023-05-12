import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from "react-router-dom"
import pic from "../assets/images/user1.jpg"


import { WishlistContext } from '../Store/WishlistContext';
import { CheckoutContext } from '../Store/CheckoutContext'




function createData(key, value) {
    return { key, value };
}

const rows = [
    createData('Name', 'Nitesh'),
    createData('User Name', 'Nitesh'),
    createData('Email', 'nitesh9919kumar@gmail.com'),
    createData('Phone', '7752828902'),
    createData('Address Line 1', "Kushinagar , UP"),
    createData('Address Line 2', "Tamkuhi Raj"),
    createData('Address Line 3', "Koindi Buzurg"),
    createData('PIN', "224407"),
    createData('City', "Kushuinagar"),
    createData('State', "Uttar Pradesh"),
];
export default function Profile() {
    var { wishlist, wishlistdispatch } = useContext(WishlistContext)
    var { checkout } = useContext(CheckoutContext)
   
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12} >
                    <img src={pic} className="w-100" height="690px" />
                </Grid>
                <Grid item md={6} xs={12} >
                    <h5 className='background text-light text-center p-2'>User Profile Section</h5>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: '100%' }} aria-label="simple table" className="table table-striped table-hover">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.key}
                                        </TableCell>
                                        <TableCell align="left">{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Link to="/update-profile" className='btn background text-light text-center w-100 btn-sm'>Update Profile</Link>
                </Grid>
            </Grid>


            <div className="container-fluid">
                <div className='table-responsive'>
                    <table className='table table-striped table-hover'>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {
                                wishlist.map((item, index) => {
                                    return <tr key={index}>
                                        <td><img src={item.pic1} className="rounded" style={{ width: "100px", height: "100px" }}></img></td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        <td>&#8377;{item.finalprice}</td>

                                        <td><Link className='btn text-primary' style={{ border: "None" }} onClick={() => wishlistdispatch({ type: "REMOVE_FROM_WISHLIST", product: item })} to={`/single-product-page/${item.id}`}><ShoppingCartIcon /></Link></td>
                                        <td><button className='btn text-primary' style={{ border: "None" }} onClick={() => wishlistdispatch({ type: "REMOVE_FROM_WISHLIST", product: item })}><DeleteIcon /></button></td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <h5 className='background text-light text-center p-2 mt-2 '>Order History Section</h5>
            <div className="container-fluid">
                {
                    checkout.map((item, index) => {
                        return <div key={index} className='row'>
                            <div className='col-md-3 col-sm-6 col-12'>
                                <div className='table-responsive'>
                                    <table className='table table-striped table-light table-hover'>
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <td>{item._id}</td>
                                            </tr>
                                            <tr>
                                                <th>User Id</th>
                                                <td>{item.userid}</td>
                                            </tr>
                                            <tr>
                                                <th>Payment Mode</th>
                                                <td>{item.mode}</td>
                                            </tr>
                                            <tr>
                                                <th>Order Status</th>
                                                <td>{item.status}</td>
                                            </tr>
                                            <tr>
                                                <th>Payment Status</th>
                                                <td>{item.paymentstatus}</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td>&#8377;{item.total}</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td>&#8377;{item.shipping}</td>
                                            </tr>
                                            <tr>
                                                <th>Final Amount</th>
                                                <td>&#8377;{item.final}</td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <div className='col-md-9 col-sm-6 col-12'>
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
                                                item.products.map((p, index) => {
                                                    return <tr key={index}>
                                                        <td><img src={p.pic1} width="50px" height="50px" className='rounded'/></td>
                                                        <td>{p.name}</td>
                                                        <td>{p.color}</td>
                                                        <td>{p.size}</td>
                                                        <td>&#8377;{p.finalprice}</td>
                                                        <td>{p.qty}</td>
                                                        <td>&#8377;{p.qty*p.finalprice}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr style={{border:"5px solid gray"}}/>
                        </div>
                    })
                }
            </div>
        </>
    )
}

