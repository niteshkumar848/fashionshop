import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function AdminNewslatter() {
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
                    <h5 className='background text-light text-center p-2'>Newslatter List Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Email Id</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("1")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>vishankchauha1n@gmail.com</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("2")}><DeleteForeverIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>vishankchauhan2@gmail.com</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord("3")}><DeleteForeverIcon/></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
