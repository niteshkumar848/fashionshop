import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function UpdateProfile() {
    let [user,setuser]=useState({
        name:"",
        phone:"",
        email:"",
        addressline1:"",
        addressline2:"",
        addressline3:"",
        pin:"",
        city:"",
        state:"",
        pic:"",
    })
    function getData(name,value){
        setuser((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        })
    }
    function getFile(name,file){
        setuser((oldData)=>{
            return{
                ...oldData,
                [name]:file
            }
        })
    }
    function postData(){
        if(user.password==user.cpassword)
        alert(
            `
                Name : ${user.name}
                Email : ${user.email}
                Phone : ${user.phone}
                Address Line1 : ${user.addressline1}
                Address Line2 : ${user.addressline2}
                Address Line3 : ${user.addressline3}
                PIN : ${user.pin}
                City : ${user.city}
                State : ${user.state}
                Pic : ${user.pic.name}
            `
        )
        else
            alert("Password and Confirm Password Doesn't Matched!!!!!!!")
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12} >
            </Grid>
            <Grid item md={8} xs={12} >
                <h5 className='background text-light text-center p-2'>Update Profile Section</h5>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-name-input"
                            label="name"
                            type="text"
                            autoComplete="current-name"
                            placeholder='Enter Name'
                            name="name"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            placeholder='Enter Email Id'
                            name="email"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-phone-input"
                            label="Phone"
                            type="text"
                            autoComplete="current-phone"
                            placeholder='Enter Phone Number'
                            name="phone"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-addressline1-input"
                            label="House Number or Building Number"
                            type="text"
                            autoComplete="current-addressline1"
                            placeholder='Enter House Number or Building Number'
                            name="addressline1"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-addressline1-input"
                            label="Street Number or Near By"
                            type="text"
                            autoComplete="current-addressline1"
                            placeholder='Enter Street Number or Near By'
                            name="addressline2"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-addressline1-input"
                            label="Village or Locality"
                            type="text"
                            autoComplete="current-addressline1"
                            placeholder='Enter Village or Locality'
                            name="addressline3"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-pin-input"
                            label="PIN Code"
                            type="number"
                            autoComplete="current-pin"
                            placeholder='Enter Pin Number'
                            name="pin"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-city-input"
                            label="City"
                            type="text"
                            autoComplete="current-city"
                            placeholder='Enter City Name'
                            name="city"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-state-input"
                            label="state"
                            type="text"
                            autoComplete="current-state"
                            placeholder='Enter State Number'
                            name="state"
                        />
                        <TextField
                            onChange={(e)=>{
                                getFile(e.target.name,e.target.files[0])
                            }}
                            id="outlined-pic-input"
                            label="Profile Pic"
                            type="file"
                            name="pic"
                        />
                        <Button variant="contained" className="background" onClick={postData}>Update</Button>
                    </Box>
            </Grid>
            <Grid item md={2} xs={12} >
            </Grid>
        </Grid>
    )
}
