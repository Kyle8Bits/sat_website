import React from 'react'

type EventCardProps = {
    name: string;
    date: string;
    location: string;
    description: string;
    image?: string;
    onClick?: () => void;
}

function EventCard(
    {name, date, location, description, image, onClick}: EventCardProps
) {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm cursor-pointer hover:shadow-xl transition-shadow duration-200" onClick={onClick}>
        {image && <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">{date}</p>
        <p className="text-gray-600 mb-1">{location}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default EventCard
