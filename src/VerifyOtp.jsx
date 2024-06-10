import React, { useState } from 'react'
import { setUser, setError } from './authSlice';
import firebase from 'firebase/compat/app';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { Col, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function VerifyOtp() {
const nav = useNavigate()
    const [otp, setOtp] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const dispatch = useDispatch();
      const onVerifyOtp = (e) => {
    e.preventDefault();
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    auth.signInWithCredential(credential)
      .then((result) => {
        dispatch(setUser(result.user));
      }).catch((error) => {
        dispatch(setError(error.message));


      });
  };
  const otpClick =()=>{
    if(otp.length===6)
    {
        nav('/home')
    }else{
        alert("enter valid 6 digit otp")
    }

  }
  return (
    <>
        
        <Row>
         
        <Col className='m-5 '>
   <img className='img-fluid me-5' height={200} width={300} src="https://png.pngtree.com/png-clipart/20230923/original/pngtree-flat-icon-for-password-protection-and-login-verification-vector-png-image_12741756.png" alt="" />
   </Col>
   <Col className='mt-5 me-5'>
   <Link to={'/'} className='text-dark' style={{textDecoration:"none"}}><i class="fa-solid fa-backward"></i> Back to login</Link>
 <form>
   <h3 className='fw-bold mt-3'>Verify code</h3>
   <p>an authorization code has been sent to your email</p>
   <TextField  type="text"
   className='form-control'
   
      id="outlined-basic" label="Enter code" variant="outlined" onChange={(e)=>setOtp(e.target.value)} />
  
   <div id="recaptcha-container"></div>
   <p>Didn't received a code  <Link className='text-warning' to={''} >Resend</Link></p>
   <Button className='mt-1 form-control' type="submit" variant="contained" onClick={otpClick}>VERIFY</Button>
 </form>
</Col>

</Row>
</>
    
  )
}

export default VerifyOtp