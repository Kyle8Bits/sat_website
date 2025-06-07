import React from 'react'
import grid_1 from '../../assets/photo/grid_1.jpg'
import grid_2 from '../../assets/photo/grid_2.jpg'
import grid_3 from '../../assets/photo/grid_3.jpg'
import grid_4 from '../../assets/photo/grid_4.jpg'

function AboutUs() {
  return (
    <div className='w-full h-screen flex items-center justify-between text-white'>

        <div className='w-[50%] h-fit flex items-center justify-center bg-white text-[#070758] ml-8 rounded-lg drop-shadow-lg'>
            <div className='max-w-3xl text-center p-8'>
                <h1 className='text-4xl font-bold mb-6'>About Us</h1>
                <p className='text-lg mb-4'>
                    The RMIT Student Ambassador Team (SAT) is a dedicated group of students who represent and promote RMIT University. Our mission is to enhance the student experience by providing support, organizing events, and fostering a sense of community among students.
                </p>
                <p className='text-lg'>
                    We are committed to being the voice of the student body, advocating for student needs, and creating opportunities for personal and professional growth. Join us in making RMIT a vibrant and inclusive place for all students!
                </p>
            </div>
        </div>
        
        <div className='w-[45%] h-screen bg-[#070758] flex items-center justify-center'>
            <div className='grid grid-cols-2 gap-4 p-8 bg-[#070758]'>
                <img src={grid_1} alt="Grid 1" className='w-full h-auto object-cover rounded-lg shadow-lg' />
                <img src={grid_2} alt="Grid 2" className='w-full h-auto object-cover rounded-lg shadow-lg' />
                <img src={grid_3} alt="Grid 3" className='w-full h-auto object-cover rounded-lg shadow-lg' />
                <img src={grid_4} alt="Grid 4" className='w-full h-auto object-cover rounded-lg shadow-lg' />
            </div>
        </div>

    </div>
  )
}

export default AboutUs
