import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Register() {
const nav = useNavigate()

const [name,setName]=useState('')
const [email,setEmail]=useState('')

    const verifyClick = ()=>{
        if(name.length>0 && email.length>0){
            nav('/log')

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
<h3 className='fw-bold mt-3'>Sign Up</h3>
<p>Let's get you all set up so you can access your personal account</p>
<div>
<TextField  type="text" className='me-5'id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
<TextField  type="text" className='ms-5'id="outlined-basic" label="Last Name" variant="outlined" />
</div>
<TextField  type="text" className='form-control mt-3' id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />

<div id="recaptcha-container"></div>

<Button className='mt-1 mb-2 form-control' type="submit" variant="contained" onClick={verifyClick}>VERIFY</Button>
<p>Already hav an account?  <Link className='text-warning' to={'/log'} >Login</Link></p>
</form>
</Col>
<Col lg={3}></Col>
</Row>
</>
  )
}

export default Register