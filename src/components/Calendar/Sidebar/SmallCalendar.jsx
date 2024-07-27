import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../../../util'
import { ChevronLeft, ChevronRight, Space } from 'lucide-react'
import GlobalContext from '../../../context/GlobalContext'

export default function SmallCalendar() {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])

    function handlePrevMonth() {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }

    function handleNextMonth() {
        setCurrentMonthIndex(currentMonthIndex + 1)
    }

    function getDayClass(day) {
        const format = "DD-MM-YY"
        const today = dayjs().format(format)
        const currentDay = day.format(format)
        const selectedDay = daySelected && daySelected.format(format)

        if (today === currentDay) {
            return 'bg-blue-500 rounded-full text-white'
        } else if (selectedDay === currentDay) {
            return 'bg-blue-100 rounded-full text-blue-600 font-bold'
        } else {
            return ''
        }
    }

    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-semibold'>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
                </p>
                <div className='flex gap-x-6'>
                    <button onClick={handlePrevMonth}
                        className='cursor-pointer text-gray-600'>
                        <ChevronLeft className='w-5 h-5' />
                    </button>
                    <button onClick={handleNextMonth}
                        className='cursor-pointer text-gray-600'>
                        <ChevronRight className='w-5 h-5' />
                    </button>
                </div>
            </header>
            <div className='grid grid-cols-7 grid-rows-6 gap-y-1'>
                {currentMonth[0].map((day, index) => (
                    <span key={index} className='text-sm py-1 text-center'>
                        {day.format('dd').charAt(0).toUpperCase()}
                    </span>
                ))}
                {currentMonth.map((week, index) => (
                    <React.Fragment key={index}>
                        {week.map((day, i) => (
                            <button
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIndex)
                                    setDaySelected(day)
                                }}
                                key={i}
                                className={`py-1 w-full ${getDayClass(day)}`}>
                                <span className='text-sm text-center'>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
