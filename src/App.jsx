import React, { useState, useContext, useEffect } from "react"
import { getMonth } from "./util"
import CalendarHeader from "./components/CalendarHeader"
import Month from "./components/Calendar/Month"
import Sidebar from "./components/Calendar/Sidebar/Sidebar.jsx"
import GlobalContext from './context/GlobalContext.jsx'
import EventModal from "./components/EventModal/EventModal.jsx"

function App() {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, ShowEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])

  return (
    <>
      {ShowEventModal && <EventModal />}
      <div className="h-screen flex flex-col"> 
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month Month={currentMonth}/>
        </div>
      </div>
    </>
  )
}

export default App
