import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
export default function AdminContactPage() {
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
                    <h5 className='background text-light text-center p-2'>Contact Us List Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848046</td>
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/1`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mohit Kumar</td>
                                <td>mohitkumar@gmail.com</td>
                                <td>8814924654</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/2`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Rishabh</td>
                                <td>rishabh@gmail.com</td>
                                <td>9873848046</td>
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/3`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mayank Mishra</td>
                                <td>mishramayank@gmail.com</td>
                                <td>881148848</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/4`}><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
