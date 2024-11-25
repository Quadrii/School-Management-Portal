'use client'
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id:1,
    title:"Lorem ipsum dolor",
    time:"12:00 PM - 2:00 PM",
    description:"Lorem ipsum dolor sit amit, consectetur stydhcnh trusthms "
  },
  {
    id:2,
    title:"Lorem ipsum dolor",
    time:"12:00 PM - 2:00 PM",
    description:"Lorem ipsum dolor sit amit, consectetur stydhcnh trusthms "
  },
  {
    id:3,
    title:"Lorem ipsum dolor",
    time:"12:00 PM - 2:00 PM",
    description:"Lorem ipsum dolor sit amit, consectetur stydhcnh trusthms "
  }
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <FontAwesomeIcon icon={faEllipsis} size='1x' />
      </div>
      <div className='flex flex-col gap-4'>
        {events.map(event => (
          <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-qSky even:boder-t-qpurple' key={event.id}>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-xs'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar