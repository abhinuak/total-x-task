import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const nav =useNavigate()
    const logoutClick =()=>{
        nav('/')
    }
  return (
    <div className='d-flex justify-content-center align-items-center gap-4 mt-5'>
        

       <h1> WELCOME USER </h1>
      
        <button className='btn btn-danger' onClick={logoutClick}>Logout</button>
    </div>
  )
}

export default Home