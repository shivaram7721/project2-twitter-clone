import React from 'react'
import logout from './Logout.module.css'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate=useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div className={logout.btnDiv}>
      <button className={logout.btn} onClick={handleLogout}>Logout</button>
    </div>
  )
}
