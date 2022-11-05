import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseLoginContext } from '../context/LoginProvider'

const PrivateRouter = () => {
    const { user, setUser } = UseLoginContext()
  return (
    (user.email && user.password) ? <Outlet/> : (alert("Lütfen Giriş Yapınız") , <Navigate to="/" /> )
    
  )
}

export default PrivateRouter