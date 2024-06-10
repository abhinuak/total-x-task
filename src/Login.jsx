import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Login() {
const nav=useNavigate()
const [name,setName]=useState('')
const [email,setEmail]=useState('')
    const loginClick =()=>{
        if(name.length>0 && email.length>0){
            nav('/home')

        }else{
            alert("enter fields")
        }
    
    }
  return (
    <>
        
    <Row>
     
    <Col className='m-5 ' lg={3}>
<img className='img-fluid me-5' height={200} width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Z-qqpPpPmDRZaw9nKxHtQAfQStjprACykd07N4j-7mVUCPn8zAym-ae-4EALetw3PTs&usqp=CAU" alt="" />
</Col>
<Col className='mt-5 me-5' lg={6}>
<Link to={'/'} className='text-dark' style={{textDecoration:"none"}}><i class="fa-solid fa-backward"></i> Back to login</Link>
<form>
<h3 className='fw-bold mt-3'>LOGIN</h3>
<p>Let's get you all set up so you can access your personal account</p>
<div>
<TextField  type="text" className='form-control'id="outlined-basic" label="Full Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />

</div>
<TextField  type="text" className='form-control mt-3' id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />

<div id="recaptcha-container"></div>

<Button className='mt-1 mb-2 form-control' type="submit" variant="contained" onClick={loginClick}>Login</Button>
<p>Don't hav an account?  <Link className='text-warning' to={'/reg'} >Login</Link></p>
</form>
</Col>
<Col lg={3}></Col>
</Row>
</>
  )
}

export default Login