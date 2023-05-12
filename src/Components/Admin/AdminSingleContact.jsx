import React,{useState} from 'react'
import LeftNav from './LeftNav'
import { useParams } from 'react-router-dom'
export default function AdminSingleContact() {
    var [status,setstatus] = useState("Active")
    var { _id } = useParams()
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
                    <h5 className='background text-light text-center p-2'>Single Contact Us Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Nitin Chauhan</td>
                            </tr>
                            <tr>
                                <th>Email Id</th>
                                <td>vishankchauhan@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>9873848046</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>This is Sample Subject</td>
                            </tr>
                            <tr>
                                <th>Message</th>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi eligendi odit architecto ipsa dolorem fuga dolore obcaecati quae autem! Asperiores est blanditiis temporibus distinctio ex odit error tempore dolor saepe consequuntur sequi ab consequatur ipsum officiis magni inventore quod deleniti nesciunt, illo rem quidem dolores! Aperiam magni illum, ipsum vero voluptates similique nisi autem, consectetur aliquam impedit rem tenetur rerum quidem expedita in harum, quibusdam repellat quod. Quis, maxime nesciunt error perferendis eveniet explicabo sunt ex? Facilis natus ex vel, commodi voluptas laudantium! Accusantium rem deleniti voluptatibus cupiditate. Corrupti ullam ipsum blanditiis id officia quo eos ut laboriosam voluptatem.</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                {
                                    status==="Active"?
                                    <th colSpan={2}><button className='btn background text-light btn-sm w-100' onClick={()=>setstatus('Done')}>Change Status To Done</button></th>
                                    :
                                    <th colSpan={2}><button className='btn background text-light btn-sm w-100' onClick={()=>setstatus('Done')}>Delete</button></th>
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
