import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseLoginContext } from '../context/LoginProvider'

const PrivateRouter = () => {
    const { currentUser} = UseLoginContext()
  return (
    (currentUser) ? <Outlet/> : (alert("Lütfen Giriş Yapınız") , <Navigate to="/" /> )
    
  )
}

export default PrivateRouter