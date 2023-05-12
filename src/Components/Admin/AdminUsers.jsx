import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import pic from "../../assets/images/user.jpg"
export default function AdminUsers() {
    function deleteRecord(_id){
        alert("Deleted"+_id)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav/>
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Users List Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitesh Kumar</td>
                                <td>nitesh</td>
                                <td>nitesh9919kuamr@gmail.com</td>
                                <td>7752828902</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("123")}><DeleteForeverIcon/></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
