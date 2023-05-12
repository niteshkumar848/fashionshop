 
import React, { useContext,useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { Link,useNavigate } from "react-router-dom"

import { CartContext } from '../Store/CartContext'
import { CheckoutContext } from '../Store/CheckoutContext'
function createData(key, value) {
    return { key, value };
}
const rows = [
    createData('Name', 'Nitesh Kumar'),
    createData('User Name', 'Nitesh'),
    createData('Email', 'nitesh9919kumar@gmail.com'),
    createData('Phone', '7752828902'),
    createData('Address Line 1', "House Number 82K"),
    createData('Address Line 2', "Street Number 5"),
    createData('Address Line 3', "Village koindi "),
    createData('PIN', "274407"),
    createData('City', "Tamkuhi raj"),
    createData('State', "UP"),
];
export default function Checkout() {
    var [mode,setmode] = useState("COD")
    var {checkoutdispatch} = useContext(CheckoutContext) 
    var { shoppingCart, total } = useContext(CartContext)
    var navigate = useNavigate()
    var shipping = 0
    var final = 0
    if (total < 1000 && shoppingCart.length > 0)
        shipping = 150
    final = total + shipping
    function changeMode(e){
        setmode(e.target.value)
    }
    function placeOrder(){
        var item ={
            type:"ADD_TO_CHECKOUT",
            userid:1,
            mode:mode,
            status:"Not Packed",
            paymentstatus:"Pending",
            total:total,
            shipping:shipping,
            final:final,
            products:shoppingCart
        }
        checkoutdispatch({item})
        navigate("/profile")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <h5 className='background text-light text-center p-2'>Billing Details</h5>
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
                <Grid item md={6} xs={12}>
                    <h5 className='background text-light text-center p-2'>Cart Details</h5>
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
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                    {
                                        shoppingCart.map((item, index) => {
                                            return <tr key={index}>
                                                <td><img src={item.pic1} className="rounded" style={{ width: "50px", height: "50px" }}></img></td>
                                                <td>{item.name}</td>
                                                <td>{item.color}</td>
                                                <td>{item.size}</td>
                                                <td>&#8377;{item.finalprice}</td>
                                                <td>{item.qty}</td>
                                                <td>&#8377;{item.qty * item.finalprice}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
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
                                <tr>
                                    <th>Mode</th>
                                    <td>
                                        <select name='mode' className='form-select' onChange={changeMode}>
                                            <option value="COD">COD</option>
                                            <option value="Net Banking">Net Banking/Card/UPI</option>
                                        </select>
                                    </td>
                                </tr>
                                {
                                    shoppingCart.length > 0 ?
                                        <tr>
                                            <th colSpan={2}><button  className='btn background text-light w-100 btn-sm' onClick={placeOrder}>Place Order</button></th>
                                        </tr>
                                        : ""
                                }
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

 