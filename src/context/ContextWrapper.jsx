import React, { useEffect, useReducer, useState } from 'react'
import GlobalContext from '../context/GlobalContext.jsx'
import dayjs from 'dayjs'

function savedEventsReducer(state, {type, payload}) {
    switch(type){
        case 'push':
            return [...state, payload]
        case 'update':
            return state.map(event => event.id === payload.id ? payload : event)
        case 'delete':
            return state.filter(event => event.id !== payload)
        default:
            throw new Error('Action type not found');
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem('SavedEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents
}

export default function ContextWrapper(props) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [ShowEventModal, setShowEventModal] = useState(false)

    const [savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer,
        [], 
        initEvents
    )

    useEffect(() => {
       localStorage.setItem('savedEvents', JSON.stringify(savedEvents)) 
    }, [savedEvents])

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
                ShowEventModal,
                setShowEventModal,
                dispatchCalEvent,
                savedEvents
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}