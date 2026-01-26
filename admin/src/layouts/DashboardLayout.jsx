import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div>
        Sidebar
        navbar
        <Outlet />
    </div>
  )
}

export default DashboardLayout