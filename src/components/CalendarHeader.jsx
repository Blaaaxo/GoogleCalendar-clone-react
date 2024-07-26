import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext.jsx'
import dayjs from 'dayjs'

export default function CalendarHeader() {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext)

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
    }

    function handleReset() {
        setMonthIndex(dayjs().month())
    }

    return (
        <header className='px-4 py-2 flex items-center'>
            <img className='mr-2 w-12 h-12'
                src="/Google_Calendar_icon.svg" alt="icon" />
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
            <button onClick={handleReset} 
                className='border rounded py-2 px-4 mr-5'>
                Today
            </button>
            <button onClick={handlePrevMonth}
                className='cursor-pointer text-gray-600 mx-2'>
                <span>
                    <ChevronLeft />
                </span>
            </button>
            <button onClick={handleNextMonth}
                className='cursor-pointer text-gray-600 mx-2'>
                <span>
                    <ChevronRight />
                </span>
            </button>
            <h2 className='ml-4 text-xl text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
            </h2>
        </header>
    )
}
