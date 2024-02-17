'use client'

import React from 'react'

export const EventList = ({ data }) => {
  console.log(data.data);
  return (
    <div className='grid grid-cols-2 gap-5'>
      {data.data.map((event) => (
        <div key={event.events.id} className='card bg-base-300 shadow-xl'>
          <img src={event.events.image} alt={event.events.title}></img>
          <div className='card-body'>
            <h3 className='card title'>{event.events.title}</h3>
            <p className='text-justify line-clamp-3'>{event.events.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
