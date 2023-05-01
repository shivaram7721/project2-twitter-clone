import React from 'react'
import logout from './Logout.module.css'

export default function Logout() {

  const handleLogout = () => {
    // Clear session data like authentication tokens or session IDs
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('sessionId');
    // Redirect user to login page
    window.location.href = '/';
  }

  return (
    <div className={logout.btnDiv}>
      <button className={logout.btn} onClick={handleLogout}>Logout</button>
    </div>
  )
}
