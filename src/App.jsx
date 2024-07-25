import React, { useState } from "react"
import { getMonth } from "./util"
import CalendarHeader from "./components/CalendarHeader"
import Month from "./components/Calendar/Month"
import Sidebar from "./components/Calendar/Sidebar"

function App() {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
    <>
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
