import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from 'react-router-dom';
export default function AdminMaincategory() {
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
                    <h5 className='background text-light text-center p-2'>Maincategory Page <Link to="/admin-add-maincategory" className='text-light'><AddIcon/></Link></h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Male</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-update-maincategory/${1}`}><EditIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Female</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-update-maincategory/${2}`}><EditIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("2")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Kids</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-update-maincategory/${3}`}><EditIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("3")}><DeleteForeverIcon/></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
