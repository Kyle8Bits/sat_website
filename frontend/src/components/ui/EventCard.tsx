import React from 'react'

type EventCardProps = {
    name: string;
    date: string;
    location: string;
    image?: string;
    link?: string;   
    onClick?: () => void;
}

function EventCard(
    {name, date, location, image, link, onClick}: EventCardProps
){
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, '_blank') // ✅ Navigate to link
    }
  };

  return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-[80%] h-fit cursor-pointer mt-10 hover:mt-4 hover:shadow-2xl transition-all duration-200" onClick={handleClick}>
        {image && <img src={image} alt={name} className="w-sm h-48 object-cover rounded-t-lg mb-4" />}
        <h2 className="text-xl font-semibold text-[#070758]">{name}</h2>
      <p className={`text-gray-600 mb-3 text-base ${!date ? 'opacity-0' : ''}`}>
        {date || 'placeholder'}
      </p>
        <p className="text-gray-600 mb-1 text-base">{location}</p>
      </div>
  )
}

export default EventCard
