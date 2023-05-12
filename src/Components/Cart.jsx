import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { CartContext } from '../Store/CartContext'
import { Link } from 'react-router-dom';

export default function Cart() {
    var { shoppingCart, total, cartdispatch } = useContext(CartContext)
    var shipping = 0
    var final = 0
    if (total < 1000 && shoppingCart.length > 0)
        shipping = 150
    final = total + shipping
    return (
        <>
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
                                <th>Qty</th>
                                <th></th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                            {
                                shoppingCart.map((item, index) => {
                                    return <tr key={index}>
                                        <td><img src={item.pic1} className="rounded" style={{ width: "100px", height: "100px" }}></img></td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        <td>&#8377;{item.finalprice}</td>
                                        <td><button className='btn text-primary' style={{ border: "None" }} onClick={() => cartdispatch({ type: "DEC_CART", product: item })}><RemoveIcon /></button></td>
                                        <td>{item.qty}</td>
                                        <td><button className='btn text-primary' style={{ border: "None" }} onClick={() => cartdispatch({ type: "INC_CART", product: item })}><AddIcon /></button></td>
                                        <td>&#8377;{item.qty * item.finalprice}</td>
                                        <td><button className='btn text-primary' style={{ border: "None" }} onClick={() => cartdispatch({ type: "REMOVE_FROM_CART", product: item })}><DeleteIcon /></button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <table className='table table-striped table-hover'>
                                <tbody>
                                    <tr>
                                        <th>Total Amount</th>
                                        <td>&#8377;{total}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping Amount</th>
                                        <td>&#8377;{shipping}</td>
                                    </tr>
                                    <tr>
                                        <th>Final Amount</th>
                                        <td>&#8377;{final}</td>
                                    </tr>
                                    {
                                        shoppingCart.length > 0 ?
                                            <tr>
                                                <th colSpan={2}><Link to="/checkout" className='btn background text-light w-100 btn-sm'>Checkout</Link></th>
                                            </tr>
                                            : ""
                                    }
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
