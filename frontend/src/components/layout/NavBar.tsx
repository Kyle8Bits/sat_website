import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/SAT_LOGO.png'
import Button from '../ui/Button'

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
   <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } flex items-center gap-8 justify-between p-2 text-white bg-[#C60000]`}>   

      <div className ="flex items-center gap-4 flex-1">
         <img src={Logo} alt="Logo" className="w-[40px] h-[40px] object-cover rounded-full top-20 left-7" />
        <h3 className='font-inter text-x1 font-bold'>RMIT Student Ambassador Team (SAT)</h3>
      </div>

      <ul className='flex items-center gap-4 text-sm font-semibold flex-none'>
        {['About Us', 'Events & Projects', 'Upcoming', 'Contact'].map((item) => (
          <li key={item} className="group">
            <a
              href="#"
              className="relative pb-1 text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#070758] after:transition-all after:duration-300 group-hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>


      <div className='flex justify-end flex-none'>
        <Button
        label="Login"
        onClick={() => window.location.href = '/login'}
        type="button"
        variant="primary"
      ></Button>
      </div>
    </div>
  )
}

export default NavBar
