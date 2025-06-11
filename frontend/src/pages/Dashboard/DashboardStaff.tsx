import React, {useState, useEffect, useRef} from 'react'
import SideNavBar from '../../components/ui/SideNavBar'

const handleItemClick = (item: string) => {
    console.log("Clicked item:", item);
    // You can update state, navigate, etc.
  };

function DashboardStaff() {
  const firstRender = useRef(true);
  const [window, setWindow] = useState('/dashboard/events')

  useEffect(() => {
    firstRender.current = false;
    if (firstRender.current) {
      // This is the first render, set the initial window
      setWindow('/dashboard/events');
    }
  }, [window]);

  return (
    <div>
      <SideNavBar onItemClick={handleItemClick} />
      <div className="dashboard-content">
        {/* Add your dashboard content here */}
      </div>
    </div>
  )
}

export default DashboardStaff
