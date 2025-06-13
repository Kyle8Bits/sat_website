import React, {useState, useEffect, useRef} from 'react'
import SideNavBar from '../../components/ui/SideNavBar'
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';


function DashboardStaff() {
  const navigate = useNavigate();
  
  const handleItemClick = (item: string) => {
    navigate(`/dashboard/${item}`);
  };

  
const handleAuthentication = async (): Promise<any> => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch("http://localhost:1414/dashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

useEffect(() => {
  handleAuthentication()
    .then((data) => {
      if (data.success) {
        console.log("Authentication successful:", data);
      } else {
        console.error("Authentication failed:", data.message);
        navigate("/login");
      }
    })
    .catch((error) => {
      console.error("Flow failed:", error);
    });
}, []);

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
