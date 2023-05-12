import React,{useState} from 'react'
import LeftNav from './LeftNav'

import { useNavigate } from 'react-router-dom';
export default function AdminAddMaincategory() {
    var [name,setname] = useState("")
    var navigate = useNavigate()
    function getData(e){
        setname(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        alert("Name : "+name)
            navigate("/admin-maincategory")
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Maincategory Page</h5>
                    <form onSubmit={postData}>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" onChange={getData} name="name" placeholder='Enter Maincategory Name' />
                        </div>
                        <button type="submit" class="btn background text-light w-100">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
