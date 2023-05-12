import React from 'react'
import LeftNav from './LeftNav'

import pic from "../../assets/images/user1.jpg"
export default function AdminHome() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav/>
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Admin Home Page</h5>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <img src={pic} width="100%" heigh="500px" className='rounded'></img>
                        </div>
                        <div className='col-md-6 col-12'>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>Nitesh Kumar</td>
                                    </tr>
                                    <tr>
                                        <th>User Name</th>
                                        <td>admin</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>nitesh9919kumar@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>7752828902</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
