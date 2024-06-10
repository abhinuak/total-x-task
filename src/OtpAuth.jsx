import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase';
import { setUser, setError } from './authSlice';
import { Col, Row, Toast } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



const OtpAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const dispatch = useDispatch();

const navigate =useNavigate()


  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        onSignInSubmit();
      }
    }, auth);
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setupRecaptcha();
    const phoneNumberFormatted = `+91${phoneNumber}`;
    const appVerifier = window.recaptchaVerifier;




    signInWithPhoneNumber(auth, phoneNumberFormatted, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      }).catch((error) => {
        dispatch(setError(error.message));
      });


  };




const otpClick =()=>{
    if(phoneNumber.length >= 10){
       alert("OTP sent successfully")
        navigate('/verify')
        
    }else{
        alert("please enter 10 digit phone number")

    }
   
}

  return (
    <>
      
       <ToastContainer position="top-center" theme="colored" autoClose={2000} />
     
    <Row>
   
        <Col className='mt-5 ms-5'>
      <form onSubmit={onSignInSubmit}>
        <h3 className='fw-bold'>LOGIN</h3>
        <p>Login to access your travelwise account</p>
        <TextField  type="text"
        className='form-control'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
           id="outlined-basic" label="Enter phone number" variant="outlined" />
       
        <div id="recaptcha-container"></div>

        <Button className='mt-3 form-control' type="submit" variant="contained" onClick={otpClick}>Get OTP</Button>
      </form>
      <p>Do not have an account ? <Link className='text-warning' to={'/reg'} >Sign up</Link></p>
      {/* <form onSubmit={onVerifyOtp}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="OTP"
        />
        <button className='btn btn-success' type="submit">Verify OTP</button>
      </form> */}
    </Col>
    <Col className='m-5 '>
        <img className='img-fluid me-5' height={200} width={300} src="https://png.pngtree.com/png-clipart/20230923/original/pngtree-flat-icon-for-password-protection-and-login-verification-vector-png-image_12741756.png" alt="" />
        </Col>
    </Row>
    </>
  );
};

export default OtpAuth;
