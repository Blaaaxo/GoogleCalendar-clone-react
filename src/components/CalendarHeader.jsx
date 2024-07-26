import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export default function CalendarHeader() {
    return (
        <header className='px-4 py-2 flex items-center'>
            <img className='mr-2 w-12 h-12' 
                src="/Google_Calendar_icon.svg" alt="icon" />
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
            <button className='border rounded py-2 px-4 mr-5'>
                Today
            </button>
            <button className='cursor-pointer text-gray-600 mx-2'>
                <span>
                    <ChevronLeft/>
                </span>
            </button>
            <button className='cursor-pointer text-gray-600 mx-2'>
                <span>
                    <ChevronRight />
                </span>
            </button>
        </header>
    )
}
