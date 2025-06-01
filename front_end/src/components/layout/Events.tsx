import React from 'react'
import EventCard from '../ui/EventCard'

export default function Events() {
  return (
    <div className='bg-white w-full h-screen p-10'>
        
    <h1 className="text-3xl font-bold text-white text-center m-0">Events & Projects</h1>
        <EventCard
            name="RMIT Open Day"
            date="Saturday, 10th August 2024"
            location="RMIT City Campus, Melbourne"
            description="Join us for RMIT's Open Day! Explore our campus, meet faculty, and discover the programs we offer. A great opportunity for prospective students to learn more about RMIT."
            image="https://example.com/open-day.jpg"/>
    </div>
  )
}
