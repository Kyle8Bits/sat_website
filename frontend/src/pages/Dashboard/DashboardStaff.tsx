import React, {useState, useEffect, useRef} from 'react'
import SideNavBar from '../../components/ui/SideNavBar'
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';


function DashboardStaff() {
  const navigate = useNavigate();
  
  const handleItemClick = (item: string) => {
    navigate(`/dashboard/${item}`);
  };


  return (
     <div className="flex h-screen w-screen bg-[#ecf0f1]">
      {/* Sidebar */}
      <SideNavBar onItemClick={handleItemClick} />

      {/* Main content area */}
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardStaff
