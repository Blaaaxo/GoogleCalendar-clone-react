import React, { useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext.jsx'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(null)

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setSmallCalendarMonth(smallCalendarMonth)
        }
    }, [smallCalendarMonth])

    return (
        <GlobalContext.Provider
            value={{
                monthIndex,
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                daySelected,
                setDaySelected,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}