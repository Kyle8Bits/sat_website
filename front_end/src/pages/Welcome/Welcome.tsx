import React from 'react'
import NavBar from '../../components/layout/NavBar'
// import Bg1 from '../../assets/photo/bg_1.png'
import Bg2 from '../../assets/photo/bg_2.png'
import Bg3 from '../../assets/photo/bg_3.png'
import SAT_cover from '../../assets/photo/sat_cover.png'
import AboutUs from '../../components/layout/AboutUs'
import Events from '../../components/layout/Events'
 
function Welcome() {
  return (
    <div>
      <NavBar/>
     <div className="absolute inset-0 -z-1 flex flex-col">
      <img src={Bg2} alt="" className="w-full object-cover h-full" />
      <img src={Bg3} alt="" className="w-full object-cover h-full" />

    </div>

     <div className="w-full h-screen flex items-center justify-center relative">
      <img src={SAT_cover} alt="" />
    </div>

      <AboutUs/>
      <Events/>

    </div>
  )
}

export default Welcome
