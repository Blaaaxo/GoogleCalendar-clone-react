import React, { createContext } from 'react'

const GlobalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    ShowEventModal: false,
    setShowEventModal: () => {},
})

export default GlobalContext