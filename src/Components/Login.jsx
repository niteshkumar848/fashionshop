import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

import { useNavigate } from 'react-router-dom';
export default function Login() {
    let [login, setlogin] = useState({
        username: "",
        password: ""
    })
    var navigate = useNavigate()
    function getData(name, value) {
        setlogin((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }
    function postData() {
        localStorage.setItem("login", true)
        localStorage.setItem("username", login.username)
        navigate("/profile") 
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12} >
            </Grid>
            <Grid item md={8} xs={12} >
                <h5 className='background text-light text-center p-2'>Login Section</h5>


                
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                         onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                            id="outlined-Username-input"
                            label="UserName*"
                            type="text"
                            autoComplete="current-username"
                            placeholder='Enter Your User Name to Login'
                            name="username"
                        />
                        <TextField
                         onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                            id="outlined-password-input"
                            label="Password*"
                            type="password"
                            autoComplete="current-password"
                            placeholder='Enter Your Password'
                            name="password"
                        />
                        <Button variant="contained" className="background" onClick={postData}>Login</Button>
                        <div className='d-flex justify-content-between'>
                            <Link href="#" color="inherit" underline="none">Forget Password</Link>
                            <Link href="/signup" color="inherit" underline="none">New User? Create a Free Account</Link>
                        </div>
                    </Box>
                


            </Grid>
            <Grid item md={2} xs={12} >
            </Grid>
        </Grid>
    )
}

 